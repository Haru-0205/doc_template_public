import Cover from "@/components/cover";



const CoverPage = () => {
    const configuration = {
        "プロジェクト識別カラー": "#451722",
        "書類番号": "A-01",
        "プロジェクト名": "共通フォーマット",
        "書類名": "取扱説明書",
        "書類名1": "",
        "書類名2": "",
        "版数": "第1版",
        "作成日": "2024年2月28日",
        "作成者": "谷口 陽音",
        "書類種別識別カラー": "#d5fff6",
        "書類種別": "取扱説明書",
        "バージョンカラー": "#451722",
        "ProjectOpacity": "1",
        "ProjectNameColor": "#FFFFFF"
    }
    return(
        <Cover props={configuration} />
    )
}

export default CoverPage