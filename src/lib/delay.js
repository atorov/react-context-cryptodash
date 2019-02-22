export default function (t = 1000) {
    return new Promise(resolve => setTimeout(resolve, t))
}
