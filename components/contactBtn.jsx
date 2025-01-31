import Link from "next/link";

export default function ContactBtn() {
    return (
        <Link
            href={"https://wa.me/6281245463322"}
            target="_blank"
            className="border-primary w-fit block border-2 bg-primary px-5 py-3 rounded-[2px] text-white"
        >
            Hubungi Kami
        </Link>
    );
}
