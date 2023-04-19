
//% color="#18ae66" iconWidth=50 iconHeight=40
namespace weather {

    //% block="获取天气API中的[WEA]数据" blockType="reporter"
    //% WEA.shadow="dropdown" WEA.options="WTYPE" WEA.defl="WTYPE.wea" 
    export function setWeather(parameter: any, block: any) {
        let wea = parameter.WEA.code;
        Generator.addImport("import requests");
        Generator.addDeclaration(`mailfunction`,`# 定义
def get_weather(wea):
    url = "https://python.trust-will.com/apis/v1/common/get_weather_data?wtype=" + wea
    resp = requests.get(url)
    result = resp.json().get('result', '')
    return result
        `);
        Generator.addCode(`str(get_weather('${wea}'))`);
    }
}
