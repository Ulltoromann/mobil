
import Navbar from './Navbar'

export default function Example() {
    return (
   <>
   <Navbar/>
   <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://images.alphacoders.com/159/159411.jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl"></h5>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://images8.alphacoders.com/289/289489.jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl"></h5>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://images.alphacoders.com/456/456611.jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl"></h5>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">FOR YOU</span>
              </h1>

<section class="overflow-hidden text-gray-700 ">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2 gap-10">

      <div class="flex flex-wrap w-1/3 rounded-lg shadow-lg bg-white max-w-sm">
        <div class="w-full p-1 md:p-2">
         <a href='https://youtu.be/OkQU5LRt9zk'> <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/36/82/6c/36826cb093c7970fdc51124d37b9108d.jpg"/></a>
        </div>
        <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Datsun Bluebird 510</h5>
      <p class="text-gray-700 text-base mb-4">
      Diproduksi pada tahun 1968 sampai tahun 1973, Datsun Bluebird 510 dirilis dalam 3 varian, yaitu sedan 4 pintu, coupe dua pintu dan wagon. Desain mobil ini terinspirasi dari sedan retro dari Eropa, itu lah mengapa Datsun 510 juga dijuluki sebagai Poor Man’s BMW yang merujuk pada mobil bergaya BMW dengan harga murah
      </p>
     
    </div>
      </div>

      <div class="flex flex-wrap w-1/3 rounded-lg shadow-lg bg-white max-w-sm">
        <div class="w-full p-1 md:p-2">
         <a href='https://youtu.be/IGDsEPIEVV0'> <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/7b/d2/b8/7bd2b829a0cf3479723a30585ad3e4e2.jpg"/></a>
        </div>
        <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Holden Kingswood</h5>
      <p class="text-gray-700 text-base mb-4">
      Siapa yang tak kenal dengan mobil yang satu ini? Mobil sedan klasik ini menjadi satu di antara mobil tua keren yang legendaris. Diproduksi di Australia, Holden Kingswood mengusung mesin berkapasitas 2.500 cc. Desainnya yang maskulin menjadi nilai plus bagi mobil klasik retro ini
      </p>
     
    </div>
      </div>

      <div class="flex flex-wrap w-1/3 rounded-lg shadow-lg bg-white max-w-sm">
        <div class="w-full p-1 md:p-2">
         <a href='https://youtu.be/Jupg1TvfBg0'> <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/96/5a/55/965a55348524beefa84ec7d8c3b830e3.jpg"/> </a>
        </div>
        <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Toyota Hardtop</h5>
      <p class="text-gray-700 text-base mb-4">
      Diproduksi pada tahun 1960, mobil yang memiliki nama asli Toyota Land Cruiser FJ40 ini layak dimasukkan dalam daftar mobil tua keren. Bermula sebagai kendaraan pasukan Cakrabirawa di tahun 1963, Toyota Hardtop kemudian sangat populer sebagai kendaraan sipil di era 1980-an.
      </p>
     
    </div>
      </div>
      
      <div class="flex flex-wrap w-1/3 rounded-lg shadow-lg bg-white max-w-sm">
        <div class="w-full p-1 md:p-2">
         <a href='https://youtu.be/UAdfxLRSgik'> <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/64/38/a7/6438a7842eb5fb0041a2ed63042a2a6d.jpg"/> </a>
        </div>
        <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Toyota Corolla DX KE70</h5>
      <p class="text-gray-700 text-base mb-4">
      Generasi ke empat dari Toyota Corolla ini sempat menjadi primadona di era 1980 hingga 1990 an. Mobil yang cukup futuristik di masa nya itu masih sering melintas di jalanan Indonesia dan masih digemari anak muda hingga sekarang.

Desainnya yang kotak menjadi ciri khas mobil tua keren pada masanya. Tak hanya penampilan luar, spesifikasi Toyota Corolla DX juga terbilang mumpuni digunakan sebagai mobil tua untuk harian. Bermodal mesin 4K-U 1.3 liter, mobil ini mampu mengeluarkan tenaga sebesar 62 HP dengan torsi 97 Nm.
      </p>
     
    </div>
      </div>
      
      <div class="flex flex-wrap w-1/3 rounded-lg shadow-lg bg-white max-w-sm">
        <div class="w-full p-1 md:p-2">
         <a href='https://youtu.be/VeHKQ_hNHkk'> <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/ae/d6/f3/aed6f33270e693433ab53661773e7b6a.jpg"/></a>
        </div>
        <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">BMW E30</h5>
      <p class="text-gray-700 text-base mb-4">
      Siapa yang tak jatuh hati ketika melihat mobil klasik BMW yang satu ini. Terkenal sebagai tunggangannya anak konglomerat, BMW E30 populer di Indonesia pada era 1980-an. Apalagi sejak dikendarai Mas Boy di film Catatan Si Boy, BMW E30 sempat menjadi ikonnya mobil anak muda.

Diproduksi tahun 1982, generasi ke-7 dari BMW seri 3 ini masih eksis sampai sekarang. Bermodal mesin 1.500 cc 4 silinder, mobil tua keren ini juga terkenal dikalangan pembalap. Terlebih, mobil sedan redan klasik ini juga diproduksi dalam berbagai varian, seperti sedan dua pintu, hingga model coupe dan convertible. Sejak pertama dirilis, penjualan mobil klasik BMW E30 menembus angka lebih dari dua juta unit.
      </p>
     
     
    </div>
      </div>
      
    </div>
  </div>
</section>
</>

    )}