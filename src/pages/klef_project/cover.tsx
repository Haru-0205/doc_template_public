import Cover from "@/components/cover";



const CoverPage = () => {
    const configuration = {
        "プロジェクト識別カラー": "#afafe9",
        "書類番号": "KPI-01",
        "プロジェクト名": "Klef Project",
        "書類名": "",
        "書類名1": "プロジェクト",
        "書類名2": "計画書",
        "版数": "第1版",
        "作成日": "2024年2月27日",
        "作成者": "谷口 陽音",
        "書類種別識別カラー": "#d5fff6",
        "書類種別": "プロジェクト計画書",
        "バージョンカラー": "#373e48"
    }
    return(
        <Cover props={configuration} />
    )
}

export default CoverPage;