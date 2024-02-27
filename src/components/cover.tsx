import React from "react";
import { text } from "stream/consumers";

        
const Cover = (props: any) => {
    
    let config = props;

    // プロジェクト識別カラー
    // fill欄にHEXで色を指定
    const rect1Style = {
        "fill": config.props["プロジェクト識別カラー"],
        "strokeWidth": "2.5",
        "fillOpacity": config.props["ProjectOpacity"] || "0.65"
    }
    
    // 書類番号
    const text1Text = config.props["書類番号"];
    
    // 書類番号のスタイル
    const text1Style = {
        "fontSize" : "64px",
        "fontFamily": 'Klee One',
        "fill": config.props["ProjectNameColor"],
        "fillOpacity": "0.648184",
        "strokeWidth": "2.5"
    }
    
    // プロジェクト名
    const text2Style = {
        "fontSize":"64px",
        "fontFamily":'Klee One',
        "fill": config.props["プロジェクト識別カラー"] || "#1a1a1a",
    }
    const text2Text = config.props["プロジェクト名"];
    
    // 書類名
    const text3Style = {
        "fontSize": "85.3333px",
        "fontFamily": 'Klee One',
        "fill":"#1a1a1a",
        "fillOpacity": "0.648184",
        "strokeWidth": "2.5"
    }
    const text3text = config.props["書類名"];
    
    // 版数
    const text4style = {
        "fontSize": "48px",
        "fontFamily": 'Klee One',
        "fill": "#1a1a1a",
        "fillOpacity":"0.648184",
        "strokeWidth": "2.5"
    }
    const text4Text = config.props["版数"];
    
    // 作成日
    const text5Style = {
        "fontSize": "48px",
        "fontFamily":'Klee One',
        "fill": "#1a1a1a",
        "fillOpacity": "0.648184",
        "strokeWidth": "2.5"
    }
    const text5Text = config.props["作成日"];
    
    // 作成者(Text)
    const text6style = {
        "fontSize":"48px",
        "fontFamily":'Klee One',
        "fill": "#1a1a1a",
        "fillOpacity":"0.648184",
        "strokeWidth":"2.5"
    }
    const text6Text = "作成者";
    
    // 作成者名
    const text7style = {
        "fontSize":"48px",
        "fontFamily":'Klee One',
        "fill":"#1a1a1a",
        "fillOpacity":"0.648184",
        "strokeWidth":"2.5"
    }
    const text7Text = config.props["作成者"];
    
    // 作成日
    const text8style = {
        "fontSize":"48px",
        "fontFamily":'Klee One',
        "fill":"#1a1a1a",
        "fillOpacity":"0.648184",
        "strokeWidth":"2.5"
    }
    const text8Text = "作成日";
    
    // 書類種別識別カラー
    const rect8Style = {
        "fill": config.props["書類種別識別カラー"],
        "fillOpacity":"0.45",
        "strokeWidth":"2.65123"
    }
    
    // 書類種別
    const text9Text = config.props["書類種別"];
    const text9Style = {
        "fontSize":"48px",
        "fontFamily":'Klee One',
        //"textAlign":"end",
        "textAnchor":"end",
        "fill":"#1a1a1a",
        "fillOpacity":"0.648184",
        "strokeWidth":"2.5"
    }
    
    // バージョンカラー
    const path9Style = {
        "fill": config.props["バージョンカラー"],
        "fillOpacity":"0.648184",
        "stroke": config.props["バージョンカラー"],
        "strokeWidth":"2.4491"
    }

    console.log(config.props);
    console.log(config.props.プロジェクト識別カラー)
    
    return(
        <svg
            width="210mm"
            height="297mm"
            viewBox="0 0 793.70081 1122.5197"
            version="1.1"
            id="svg1">
        <defs id="defs1" />
        <g id="layer1">
        {/** プロジェクト識別カラー */}
        <rect
        id="rect1"
        style={rect1Style}
        width="796.00201"
        height="93.158989"
        x="-0.9223662"
        y="0"/>
        {/** 書類番号 */}
        <text
            style={text1Style}
            x="15.249639"
            y="71.185638"
            id="text1">
            {text1Text}
        </text>
        {/** プロジェクト名 */}
        <text
            style={text2Style}
            x="81.880188"
            y="221.27875"
            id="text2">
            {text2Text}
        </text>
        {/** 書類名 */}
        <text
            style={text3Style}
            x="90.90419"
            y="445"
            id="text3">
                <tspan y={445}>{config.props['書類名1']}</tspan>
                <tspan x={93} y={540} >{config.props['書類名2']}</tspan>
            {text3text}
        </text>
        {/** 版数 */}
        <text
            style={text4style}
            x="469.46497"
            y="605.71313"
            id="text4">
            {text4Text}
        </text>
        {/** 作成日 */}
        <text
            style={text5Style}  
            x="253.67093"
            y="812.43518"
            id="text5">
            {text5Text}
        </text>
        <text
            style={text6style}
            x="92.424194"
            y="870.7121"
            id="text6">
            {text6Text}
        </text>
        {/** 作成者 */}
        <text
            style={text7style}
            x="262.50293"
            y="870.7121"
            id="text7">
            {text7Text}
        </text>
        <text
            style={text8style}
            x="92.424194"
            y="814.01917"
            id="text8">
            {text8Text}
        </text>
        {/** 書類種別識別カラー */}
    <rect
       style={rect8Style}
       id="rect8"
       width="793.23492"
       height="72.866936"
       x="0.92236626"
       y="1048.7305" />
    <text
       style={text9Style}
       x="775.09076"
       y="1105.0428"
       id="text9">
         {text9Text}
       </text>
    <path
       style={path9Style}
        d="M 39.045276,151.18111 V 963.77955"
       id="path9"/>
  </g>
</svg>
    )
}

export default Cover;