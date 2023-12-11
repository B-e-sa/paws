export default function Topic(props: React.ComponentProps<any>) {
    return (
        <div className={`flex flex-col items-center my-5 ${props.className}`}>
            {props.children}
        </div>
    )
}