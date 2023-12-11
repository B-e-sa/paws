export default function Title(props: React.ComponentProps<'h2'>) {
    return (
        <h2 className="md:text-3xl text-[1.8rem] mb-5 font-semibold">
            {props.children}
        </h2>
    );
}