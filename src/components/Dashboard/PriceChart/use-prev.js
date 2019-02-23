import { useRef } from 'react'

export default function () {
    const ref = useRef(Date.now());
    // useEffect(() => {
    //     ref.current = value;
    // });
    return ref.current;
}
