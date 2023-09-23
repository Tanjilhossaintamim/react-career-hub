export const getJobs = () => {
    const jobs = localStorage.getItem("allplied-job")
    if (jobs?.length > 0 && jobs != null) {
        return JSON.parse(jobs)
    }
    return []
}
export const saveJobs = id => {
    const jobs = getJobs()
    const isExist = jobs.includes(id)
    if (!isExist) {
        jobs.push(id)
        localStorage.setItem("allplied-job", JSON.stringify(jobs))
        return true
    }
    return false
}