const ALPHA_LEN = 26;
const sample_len = 1;
const max_len = 10;
let model;
var status = "";
const tf = require('@tensorflow/tfjs');
export async function setup() {
    model = await create_model(max_len, ALPHA_LEN);

    model = await loadModelFromFile();

    document.getElementById('filled-basic').addEventListener('keyup', async () => {
        const pattern = new RegExp('^[a-z]{1,' + max_len + '}$');
        let pred_features = [];
        pred_features.push(document.getElementById('filled-basic').value);
        if (pred_features[0].length < sample_len + 1 || !pattern.test(pred_features[0])) {
            document.getElementById('pred_labels').value = '';
            return;
        }
        pred_features = preprocessing_stage_2(pred_features, max_len);
        pred_features = preprocessing_stage_5(pred_features, max_len, ALPHA_LEN);
        let pred_labels = await model.predict(pred_features);
        pred_labels = postprocessing_stage_1(pred_labels)
        pred_labels = postprocessing_stage_2(pred_labels, max_len)[0]
        document.getElementById('pred_labels').value = pred_labels.join("");
    })
}
function preprocessing_stage_2(words,max_len){
    // function to convert the wordlist to int 
    // string [] = words
    // int = max_len
    status = "Preprocessing Data 2";
    let int_words = [];
    for (let i in words){
        int_words.push(word_to_int(words[i],max_len))
    }
    return int_words;
}
function preprocessing_stage_5(words, max_len, alpha_len) {
    // function to convert int to onehot encoding 
    // int [] = words
    // int = max_len, alpha_len
    status = "Preprocessing Data 5";
    return tf.oneHot(tf.tensor2d(words, [words.length, max_len], 'int32'), alpha_len);
}
function postprocessing_stage_1(words){
    //function to decode onehot encoding
    return words.argMax(-1).arraySync();
}
function postprocessing_stage_2(words,max_len){
    //function to convert int to words
    let results = [];
    for (let i in words){
        results.push(int_to_word(words[i],max_len));
    }
    return results;
}
function word_to_int (word,max_len){
    // char [] = word
    // int = max_len
    let encode = [];
    for (let i = 0; i < max_len; i++) {
        if(i<word.length){
        let letter = word.slice(i, i+1);
        encode.push(letter.charCodeAt(0)-96);
        }else{
        encode.push(0)
        }
    }
    return encode;
}
function int_to_word (word,max_len){
    // int [] = word
    // int = max_len
    let decode = []
    for (let i = 0; i < max_len; i++) {
        if(word[i]==0){
            decode.push("");
        }else{
            decode.push(String.fromCharCode(word[i]+96))
        }
        
    }
    return decode;
}
async function create_model(max_len,alpha_len){
    var model = tf.sequential();
    await model.add(tf.layers.lstm({
        units:alpha_len*2,
        inputShape:[max_len,alpha_len],
        dropout:0.2,
        recurrentDropout:0.2,
        useBias: true,
        returnSequences:true,
        activation:"relu"
    }))
    await model.add(tf.layers.timeDistributed({
        layer: tf.layers.dense({
        units: alpha_len,
        dropout:0.2,
        activation:"softmax"
        })
    }));
    model.summary();
    return model
}

async function loadModelFromFile() {
    try {
      const response = await fetch('autocorrect_model.json');
      if (!response.ok) {
        throw new Error('Failed to fetch model file.');
      }
      
      return await tf.loadLayersModel('autocorrect_model.json');
    } catch (error) {
      console.error('Error loading model:', error);
      throw error;
    }
  }