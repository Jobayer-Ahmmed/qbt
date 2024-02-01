const getLocalstorageData = () => {
    const data = localStorage.getItem("ticket")
    if (data) {
        const jsonData = JSON.parse(data)
        return jsonData
    }
    return []
}


const setLocalstorageData = (name, email, time) => {
    const getData = getLocalstorageData()
    getData.push({ name, email, time  })
    const strData = JSON.stringify(getData)
    localStorage.setItem("ticket", strData)
}


export { getLocalstorageData, setLocalstorageData}



