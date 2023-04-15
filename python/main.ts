enum WTYPE {
    //% block="天气"
    wea,
    //% block="温度"
    tem,
    //% block="湿度	"
    humidity,
    //% block="空气质量	"
    air,
    //% block="风力"
    win_speed,
    //% block="风向"
    win,
    //% block="风速"
    win_meter,
    //% block="气压"
    pressure,
}

//% color="#18ae66" iconWidth=50 iconHeight=40
namespace weather {

    //% block="获取天气API中的[WEA]数据" blockType="reporter"
    //% WEA.shadow="dropdown" WEA.options="WTYPE" WEA.defl="WTYPE.wea" 
    //% TMAIL.shadow="string" TMAIL.defl=" "
    export function setWeather(parameter: any, block: any) {
        let wea = parameter.WEA.code;
        Generator.addImport("import requests");
        Generator.addDeclaration(`mailfunction`,`# 定义
def get_weather(wea):
    url = "https://python.trust-will.com/apis/v1/common/get_weather_data"
    resp = requests.get(url)
    result = resp.json().get('result',{})
    return result.get(wea, "")
        `);
        Generator.addCode([`get_weather('${wea}')`, Generator.ORDER_UNARY_POSTFIX]])
    }
}
