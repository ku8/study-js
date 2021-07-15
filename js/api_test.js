/*
  参考にしたサイト
    https://mebee.info/2020/10/25/post-20785/
*/

function get(){
  // XMLHttpRequestオブジェクトの作成
  var request = new XMLHttpRequest();

  // URLを開く
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

  // サーバーに期待する応答の種類を変更することができる
  // request.responseType = 'text';

  // リクエストをURLに送信
  request.send();

  // レスポンスが返ってきた時の処理を記述 
  // 処理の状況変化を監視して自動的に呼ばれる関数
  request.onload = () => {
    // readyState XMLHttpRequest の状態 4: リクエストが終了して準備が完了
    // status httpステータス
    if (request.readyState == 4 && request.status == 200) {
      // jsonをオブジェクトに変更
      const jsonObj = JSON.parse(request.responseText);      

      /*
        {
          id: 1 
          title: delectus aut autem 
          completed: false
        }
        こんなデータ入ってる
      */
      for (let item of jsonObj) {        
          console.log("id: " + item.id + " title: " + item.title + " completed: " + item.completed);        
      }

      disp(jsonObj, "txt")
    }
  };
}

 //フロントに表示する関数
function disp(obj, id) {
  let text = [];
  // for ofを使用
  for (let item of obj) {
    text.push('<li class="list-group-item">' + "id: " + item.id + " userId: " + item.userId + " completed: " + item.completed + '</li>');
  }
  //innerHTMLを使用して表示    
  document.getElementById(id).innerHTML = text.join('');
}

window.onload = () => {
  // クリックイベントを登録
  btn.onclick = () => { get(); }; // document.getElementById('btn');を省略
}

/*
  function ()
  は
  () =>
  という形でも書ける

  readystate
    https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest/readyState

*/