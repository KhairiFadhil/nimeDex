import { useRouter } from "next/navigation";
import { useRef } from "react"
import { FaMagnifyingGlass} from "react-icons/fa6";

function Search(){
    const searchRef = useRef()
    const router = useRouter()
    
    const HandleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value
        router.push(`/search/${keyword}`)
    }
    return(
        <div className="z-20 flex justify-end lg:transition-[flex-grow] lg:max-w-[50rem]">
                        <div className="navbar-search flex flex-grow w-full">
                            <form className="content-center relative">
                                <button className="flex absolute z-20 right-3 bottom-5" onClick={HandleSearch}><FaMagnifyingGlass/></button>
                                <input className="w-full h-7 px-2 input-search placeholder:px-2 backdrop-blur-md" type="text" placeholder="Search" ref={searchRef}></input>
                            </form>
                        </div>

                    </div>
    )
}
export default Search