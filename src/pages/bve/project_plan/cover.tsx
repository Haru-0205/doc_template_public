import Cover from "@/components/cover";


const CoverPage = () => {
    const configuration = {
        "プロジェクト識別カラー": "#451722",
        "書類番号": "BVO-01",
        "プロジェクト名": "BVE Trainsim 独自路線",
        "書類名": "",
        "書類名1": "プロジェクト",
        "書類名2": "計画書",
        "版数": "第1版",
        "作成日": "2024年2月28日",
        "作成者": "谷口 陽音",
        "書類種別識別カラー": "#67B1CA",
        "書類種別": "プロジェクト計画書",
        "バージョンカラー": "#451722",
        "ProjectOpacity": "1",
        "ProjectNameColor": "#FFFFFF"
    }
    return(
        <Cover props={configuration} />
    )
}

export default CoverPage