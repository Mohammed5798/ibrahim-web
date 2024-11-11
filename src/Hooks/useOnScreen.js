import { useRef , useState , useEffect} from "react"

let useOnScreen = ()=>{


    let element = useRef();
    let [show , setShow] = useState(false);

    useEffect( ()=>{

        let observer = new IntersectionObserver(all=>{

            all.forEach( one=>{
                if(one.isIntersecting){ setShow(true) }
            })

        },{threshold:0.4})
        observer.observe(element.current)

    },[show])


    return { element , show };
}

export default useOnScreen;