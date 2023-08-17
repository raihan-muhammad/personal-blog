import Link from "next/link";
import PaddingContainer from "../layout/padding-container";

const Navigation = () => {
    return (
        <section className="border-b sticky top-0 right-0 left-0 bg-white bg-opacity-90 backdrop-blur-md">
            <PaddingContainer>
                <div className="flex items-center justify-between py-5">
                    <Link className="text-lg font-bold" href='/'>Raihan Blog</Link>
                    <nav>
                        <ul className="flex items-center gap-4 text-neutral-600">
                            <li>
                                <Link href='/javascript'>Javascript</Link>
                            </li>
                            <li>
                                <Link href='/docker'>Docker</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </PaddingContainer>
        </section>
    )
}

export default Navigation;