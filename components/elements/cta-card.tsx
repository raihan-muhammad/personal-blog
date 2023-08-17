import Image from "next/image";

const CtaCard = () => {
    return (
        <section className="rounded-md bg-slate-100 py-10 px-6 relative overflow-hidden">
            <div className="absolute z-10 inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/30"/>
            <Image 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                fill
                alt="CTA Card Image"
                className="object-cover object-center"
            />
            <div className="relative z-20">
                <div className="font-medium text-lg">#letscoding</div>
                <h3 className="text-4xl font-semibold mt-3">Let&apos;s code with me!</h3>
                <p className="mt-2 text-lg max-w-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sapiente vitae, odit, corrupti delectus necessitatibus saepe laboriosam nulla eaque ab minus eligendi quia </p>
                <form className="mt-6 flex items-center gap-2">
                    <input type="text" placeholder="Write your email" className="bg-white/80 rounded-md py-2 px-3 placeholder:text-sm outline-none focus:ring-2 ring-neutral-600" />
                    <button className="bg-neutral-900 rounded-md py-2 px-3 text-neutral-200">Sign Up</button>
                </form>
            </div>
        </section>
    )
}

export default CtaCard;