//  Copyright (c) 2025 auieo-dayo
//  Licensed under the MIT License
let params = {},pagetitle,nowpage

window.onload = function() {
        new URLSearchParams(window.location.search).forEach((value, key) => {
            params[key] = value;
        });
    pagetitle = document.getElementsByTagName("title")[0].textContent
    if (pagetitle === "マイクラ統合版で遊ぼう！") {
        nowpage = 1
    }
    if (pagetitle === "マイクラ統合版で遊ぼう！ | 歴史") {
        nowpage = 2
    }
    if (pagetitle === "windowopen") {
        nowpage = 10
    }
    //windowopenなら
    if (nowpage === 10) {
        if (!params.url) {
            alert("URLを指定してください")
            window.close()
        } else {
            document.getElementById("iframe").src = params.url 
        }
    }
    //クエリ指定スクロール
    if (params.id) {
        idscroll(params.id)
    }
}
function open_window(url) {
    window.open(`/window_open.html?url=${url}`,"", 'width=700,height=600,status=no');
}
function idscroll(id="top") {
    const target = document.getElementById(id);
    window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
}