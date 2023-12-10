import PawsIcon from "../icons/pets/paws";

export default function Logo(
    props: React.ComponentProps<'div'>
) {
    return (
        <div className={`h-fit w-fit ${props.className}`}>
            <PawsIcon className="w-12 h-12 -rotate-[30deg]" />
            <p className="-mt-7 ml-10 text-2xl font-bold text-white">Paws</p>
        </div>
    );
}