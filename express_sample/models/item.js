//fs　モジュール読み込み
const fs = require('fs')

//data/items.jsonのパス設定
exports.filePath = "./data/items.json"

//全てのデータを取得するメソッド
exports.get = () => {
    var json = fs.readFileSync(this.filePath)
    //JSONデータをパース(オブジェクトに変換)
    var values = JSON.parse(json);

    return values;
}

//IDを指定してデータ取得するメソッド
exports.find = (id) => {
    var values = this.get();
    //データを繰り返して、idが一致したら返す
    return values.find((value) => value.id == id);

}