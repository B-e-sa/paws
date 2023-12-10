export default function Topic(props: React.ComponentProps<any>) {
    return (
        <div className={`my-10 ${props.className}`}>
            {props.children}
        </div>
    )
}