#!/bin/sh

echo "*"
echo "**** Hello, World! ****"
echo "*"

echo "Hello, World!"

echo "**** 実行結果 ****"
echo "Hello, World!と表示する"

echo "*"
echo "**** 入力・出力 ****"
echo "*"

echo "↓↓↓↓ 入力してください！ ↓↓↓↓"

read NAME
echo "Hello, $NAME!"

echo "**** 実行結果 ****"
echo "echoで出力、 readで入力します。"

echo "*"
echo "**** 改行 ****"
echo "*"

echo -e "Hello\n$NAME!"

echo "**** 実行結果 ****"
echo "改行されます。"

echo "*"
echo "**** 変数 ****"
echo "*"

var="これは変数です"
VaR_2="これも変数です"
echo "Var_2 = $VaR_2"

VaR_2="VaR_2が変更されました。"
echo ${VaR_2}

echo "**** 実行結果 ****"
echo "変数代入されます。"

# readonly var
# var="readonly varを変えてみる。"

echo "*"
echo "**** 入力値 ($0 $1 $2) 合計: $# ****"
echo "*"

echo "\$0（スクリプト名）: $0"
echo "\$1（1番目の引数）: $1"
echo "\$2（2番目の引数）: $2"
echo "\$#（引数の数）: $#"
echo "\"\$*\": \"$*\""
echo "\"\$@\": \"$@\""
VAR="exit値は0になるはずです"
echo $?

echo "**** 実行結果 ****"
echo "代入値が出力されます。"

echo "*"
echo "**** 入力値 ($0 $1 $2) 合計: $#？？ ****"
echo "*"

echo "1 - ${var:-wordSetInEcho1}"
echo "2 - var = ${var}"
echo "3 - ${var:=wordSetInEcho3}"
echo "4 - var = ${var}"
unset var
echo "5 - ${var:+wordSetInEcho5}"
echo "6 - var = $var"
var="newVarValue"
echo "7 - ${var:+wordSetInEcho7}"
echo "8 - var = $var"
echo "9 - ${var:?StandardErrorMessage}"
echo "10 - var = ${var}"

echo "**** 実行結果 ****"
echo "代入値が出力されます。？？"

echo "*"
echo "**** 配列 ****"
echo "*"

#bash shellで配列の書き方
ARRAY=(item1 item2 item3 item4)
ARRAY[0]="ITEM1"
ARRAY[2]="ITEM3"

echo "ARRAY[0]: ${ARRAY[0]}"
echo "ARRAY[1]: ${ARRAY[1]}"

#全てのアイテムをアクセスする
echo "ARRAY[*]: ${ARRAY[*]}"
echo "ARRAY[@]: ${ARRAY[@]}"

echo "**** 実行結果 ****"
echo "配列の処理します。"

echo "*"
echo "**** if文 ****"
echo "*"

if [ "$1" -gt "$2" ]
then
    echo "1番目の引数が2番目の引数より大きい"
elif [ "$1" -eq "$2" ]
then
    echo "1番目の引数と2番目の引数は同じです"
else
    echo "1番目の引数が2番目の引数より小さい"
fi

echo "**** 実行結果 ****"
echo "代入値を比較します。（文字列だとエラーが出ます。）"

echo "*"
echo "**** case文 ****"
echo "*"

DRINK="coffee"
case "$DRINK" in
    "beer") echo "ビールです"
    ;;
    "juice") echo "ジュースです"
    ;;
    "coffee") echo "プログラマーが飲むとコードに変化！"
    ;;
esac

echo "**** 実行結果 ****"
echo "case文の値によって切り分けをします。"

echo "*"
echo "**** while文 ****"
echo "*"

a=0
while [ $a -lt 5 ]
do
    echo $a
    a=`expr $a + 1`
done

echo "**** 実行結果 ****"
echo "while文のループ処理が行われます"

echo "*"
echo "**** until文 ****"
echo "*"

a=0
until [ ! $a -lt 5 ]
do
    echo $a
    a=`expr $a + 1`
done

echo "**** 実行結果 ****"
echo "until文のループ処理が行われます"

echo "*"
echo "**** for文 ****"
echo "*"

for var in 0 1 2 3 4  #範囲の書き方(Bash独自) => {0..4}
do
    echo $var
done

echo "**** 実行結果 ****"
echo "for文（1 2 3 4）のループ処理が行われます"

for var in {0..4}  #範囲の書き方(Bash独自) => {0..4}
do
    echo $var
done

echo "**** 実行結果 ****"
echo "for文（{0..4}）のループ処理が行われます"

echo "*"
echo "**** 関数文（定義） ****"
echo "*"

#関数を指定します
MyFunction () {
    echo "関数のechoです。"
}
MyParamFunc() {
    echo "引数1:$1 引数2:$2"
}

echo "**** 定義 ****"
echo "関数定義します"

echo "*"
echo "**** 関数文（呼び出し） ****"
echo "*"

#関数を呼び出します
MyFunction
MyParamFunc param1 param2

echo "**** 実行結果 ****"
echo "MyFunction,MyParamFunc param1 param2の呼び出しをします"

echo "*"
echo "**** rename.sh ****"
echo "*"

#このスクリプトがあるディレクトリ中の
#txtファイルを全部mytxt{番号}.txtに
#変更するスクリプトです

index=1
for file in *.txt
do
    mv "$file" "mytxt${index}.txt"
    index=`expr $index + 1`
done

echo "**** 実行結果 ****"
echo "lsは現在いるディレクトリ中のファイルをリストします。"
