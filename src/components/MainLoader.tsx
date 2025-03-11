import { Icon } from "@iconify/react/dist/iconify.js"

const MainLoader = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-primary">
            <Icon icon="tabler:loader" width="64" height="64" className="text-secondary animate-spin" />
            <p className="text-white font-semibold text-xl">Loading ...</p>
        </div>
    )
}

export default MainLoader