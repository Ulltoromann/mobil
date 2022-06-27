import Navbar from './Navbar'
import Footer from './Footer'

export default function Example() {
    return (
<>
<Navbar/>
<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Collection</span>
              </h1>

<section class="overflow-hidden text-gray-700">
  <div class="container px-5 py-10 mx-auto lg:pt-24 lg:px-32 ">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/84/6a/17/846a17dd4a667ceba43db89a542248a3.jpg"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/ee/fd/f1/eefdf1e4e3a23a5a0dc6538a0c0f1a61.jpg"/>
        </div>
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/d4/f5/80/d4f58076c2a274f05400a9589a723bbc.jpg"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/66/a2/1c/66a21c7e114e2de9f8ef496f84b58235.jpg"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/0b/97/de/0b97de5a7e1c89de3c2aeb5e2b3273fb.jpg"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/51/3d/a9/513da9097eba8aa96d65906f1054c323.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
</>
)
}