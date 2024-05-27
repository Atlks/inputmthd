//f = "C:\\w\\iptmthd\\keysdir\\curKey.txt"

  exe3558 = "D:\\prgrm\\AutoIt3\\AutoIt3.exe"
var buff = ""
var {readFileSync, writeFileSync, appendFileSync} = require("fs");
const fs = require('fs')
require("./file")

/** la law law 法律
 * la law 法律 lk 类库喜欢  lk 喜欢 lk 喜欢 lib
 */
function main() {
    const prcsmd = require("child_process");
    const filePath = __dirname+'/../ipt_keysdir\\'
    console.log(`正在监听 ${filePath}`);
    fs_watch(filePath, watchHdlr)



}
require("ini");
/**
 *lk
 * @param event
 * @param filename
 */
function watchHdlr(event, filename, filePath) {


    var funname = arguments.callee.name;
    // arguments.callee.name
   var  arg125 = JSON.stringify(arguments);
    console.log("*** fun " + funname + arg125);


    if (event == "change") {
        if (global[event + filename])
            return
        global[event + filename] = true;// read
        console.log(`${filename}文件发生更新`)
        let curiptWd = readFileSync(filePath + "/" + filename).toString()
        console.log(curiptWd)
        curiptWdLow = curiptWd.toLowerCase()
        if (curiptWdLow == "{space}" ) {
            console.log("out buff=>" + buff)
            findWdByBufpartNwrtToUi(buff)
            buff = ""
            setEchoWinTxt(buff);
            return;
        } else if (  curiptWdLow == "{enter}") {
            //    alf 字母表 alf

          //  wrtToUi(buff)
            buff = ""
            setEchoWinTxt(buff);
            return;
        }

        else if (curiptWdLow == "{backspace}") {
            console.log("  buff=>" + buff)
            let lastIdx = buff.length - 1
            buff = buff.substring(0, lastIdx)
            buff = buff.trim();
            console.log("  buff=>" + buff)
            //  alf 字母表  alf


            findWdLstByPartwd(buff)
            return;
        } else if (curiptWd.startsWith("{")) {
            return;
        } else {
            //nml alfbt
            buff = buff + curiptWd;
            console.log("buff=>" + buff)
            findWdLstByPartwd(buff)
            return;
        }
    }
}

// txt = readFileSync(iomapfile)
// jsonarr = JSON.parse(txt)
// last 最后的 la

main()

/**
 *
 * @param echoWinTxt
 */
function setEchoWinTxt(echoWinTxt) {
    writeFileSync("ipt_echo.txt", echoWinTxt)
}


function wrtToUi(cnstr) {
    try {

        let cmd = exe3558 + "  writeToUi.au3 " + cnstr;

        console.log(cmd)
        // return
        var prcsmd = require('child_process');
        // let rzt =
        prcsmd.execSync(cmd, {

            maxBuffer: 20000 * 1024,


        }).toString();

    } catch (e) {
        console.log(e)

    }
}

/** csl cs
 * undefined undefi nedundefined undefined
 * undefined
 * undefined  law 法律 jst 就 我 nam 名字 nam
 *  law  law law last  last nm 我们 nam 名字
 * law LAW LAW LAW LAW LAW law
 * @param buff
 * @constructor
 */
function findWdByBufpartNwrtToUi(buff) {

    console.log("[iptBufToUI]" + JSON.stringify(arguments))
    let cnstr = findWdByBufpart(buff)

    // if(cnstr==undefined)
    //     return  ""; //  alf 字母表 // alf a alf alf // // //   alf alf alf alf alf  alf
    if (!cnstr) {
        // undefined cant find wd,,then try first wd
        //or more thabn two ,also chs firstg wd 单词 sbs 空格 空格sbt   sbst 特殊
        let rows = findWdLstByPartwdList(buff)
        if (rows.length >= 1)
        {
            cnstr=rows[0].cnstr
            console.log("[findWdByBufpartNwrtToUi] first wd is=>"+cnstr)
           // return wd;
        }
        else
            return ""
    }
//cnstr is can find  ....
    console.log("[Buf2wdWrtToUI]cnstr=>" + cnstr)
    wrtToUi(cnstr);

}

iomapfile = __dirname+"/../libx\\ipt_iomap.json"
/**
 *  csl 控制台 csl 控制台
 * @param curiptWd
 * @returns {*}
 */
function findWdByBufpart(curiptWd) {

    if (curiptWd == "")
        throw "curiptWd is empty"



    var {readFileSync, writeFileSync, appendFileSync} = require("fs");
    txt = readFileSync(iomapfile)
    jsonarr = JSON.parse(txt)


    //  curiptWd = readFileSync(cuript).toString()
    curiptWd = curiptWd.toLowerCase()

    if (curiptWd.startsWith("{"))
        return
    showecho = ""
    for (jsonobj of jsonarr) {
        if (jsonobj.key == (curiptWd)) {
            return jsonobj.cnstr
        }

    }

}


function findWdLstByPartwdList(curWdpart) {
    if (curWdpart == "") {
        setEchoWinTxt("");
        return ""
    }




    var {readFileSync, writeFileSync, appendFileSync} = require("fs");
    txt = readFileSync(iomapfile)
    jsonarr = JSON.parse(txt)


    //  curiptWd = readFileSync(cuript).toString()
    curWdpart = curWdpart.toLowerCase()

    if (curWdpart.startsWith("{"))
        return
    showecho = ""
    let rows = []
    for (jsonobj of jsonarr) {
        if (jsonobj.key.startsWith(curWdpart)) {
            rows.push(jsonobj)
        }

    }
    return rows
}

/**
 *
 * @param curWdpart
 */
function findWdLstByPartwd(curWdpart) {
    if (curWdpart == "") {
        setEchoWinTxt("");
        return ""
    }




    var {readFileSync, writeFileSync, appendFileSync} = require("fs");
    txt = readFileSync(iomapfile)
    jsonarr = JSON.parse(txt)


    //  curiptWd = readFileSync(cuript).toString()
    curWdpart = curWdpart.toLowerCase()

    if (curWdpart.startsWith("{"))
        return
    showecho = ""
    for (jsonobj of jsonarr) {
        if (jsonobj.key.startsWith(curWdpart)) {
            showecho = showecho + " " + jsonobj.key + "" + "" + jsonobj.cnstr + " "
        }

    }
    console.log(showecho)
    setEchoWinTxt(showecho);
    // writeFileSync("ipt_echo.txt",showecho)
}

// setInterval(()=>{
//     try {
//         core();
//     }catch (e) {
//         console.log(e)
//     }
//
// },50)

// s sttste