import { MapPin, Users, Award, Heart, Clock, Landmark } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2832044/pexels-photo-2832044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Pemandangan Solok Selatan"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Solok Selatan</h1>
            <p className="text-xl opacity-90">
              Mengenal lebih dekat daerah dengan kekayaan alam dan budaya yang memukau
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sekilas Tentang Solok Selatan</h2>
              <p className="text-gray-700 mb-4">
                Solok Selatan adalah salah satu kabupaten di Provinsi Sumatera Barat, Indonesia. 
                Kabupaten ini memiliki keindahan alam yang luar biasa, termasuk pegunungan, air terjun, 
                dan sungai yang jernih. Selain itu, Solok Selatan juga kaya akan budaya dan tradisi 
                Minangkabau yang masih terjaga hingga saat ini.
              </p>
              <p className="text-gray-700 mb-4">
                Dibentuk pada tahun 2004, Solok Selatan merupakan hasil pemekaran dari Kabupaten Solok. 
                Meski tergolong kabupaten yang relatif baru, Solok Selatan memiliki potensi besar dalam 
                berbagai sektor, seperti pariwisata, pertanian, dan ekonomi kreatif.
              </p>
              <p className="text-gray-700">
                Masyarakat Solok Selatan dikenal dengan keramahannya dan kepatuhannya terhadap adat 
                istiadat. Rumah gadang, kuliner khas, dan kesenian tradisional menjadi bagian tak 
                terpisahkan dari kehidupan sehari-hari penduduk lokal.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Rumah Gadang"
                className="rounded-lg h-48 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Air Terjun"
                className="rounded-lg h-48 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/5677332/pexels-photo-5677332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Kuliner Khas"
                className="rounded-lg h-48 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Pemandangan Alam"
                className="rounded-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin size={36} className="mx-auto mb-4 text-primary-500" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">3,346</h3>
              <p className="text-gray-600">Kilometer Persegi</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Users size={36} className="mx-auto mb-4 text-secondary-500" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">156,000</h3>
              <p className="text-gray-600">Penduduk</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Landmark size={36} className="mx-auto mb-4 text-accent-500" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">7</h3>
              <p className="text-gray-600">Kecamatan</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Award size={36} className="mx-auto mb-4 text-forest-500" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">39</h3>
              <p className="text-gray-600">Nagari (Desa)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visi & Misi</h2>
            <p className="text-gray-600">
              Arah dan tujuan pengembangan Solok Selatan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 p-8 rounded-lg border border-primary-100">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Visi</h3>
              <p className="text-gray-700">
                "Terwujudnya Solok Selatan yang Maju, Sejahtera, dan Berkelanjutan 
                Berbasis Agama, Budaya, dan Kearifan Lokal"
              </p>
            </div>
            <div className="bg-secondary-50 p-8 rounded-lg border border-secondary-100">
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">Misi</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <Heart size={18} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Meningkatkan kualitas kehidupan beragama dan berbudaya</span>
                </li>
                <li className="flex items-start">
                  <Heart size={18} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Mewujudkan tata kelola pemerintahan yang baik dan bersih</span>
                </li>
                <li className="flex items-start">
                  <Heart size={18} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Meningkatkan pembangunan infrastruktur yang berkelanjutan</span>
                </li>
                <li className="flex items-start">
                  <Heart size={18} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Mengembangkan ekonomi kerakyatan berbasis potensi lokal</span>
                </li>
                <li className="flex items-start">
                  <Heart size={18} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Meningkatkan kualitas sumber daya manusia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Sejarah Singkat</h2>
            
            <div className="space-y-12 mt-8">
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-500 text-white font-bold">
                    <Clock size={24} />
                  </div>
                  <div className="h-full w-0.5 bg-primary-200 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">2004</h3>
                  <p className="text-gray-700">
                    Solok Selatan resmi dimekarkan dari Kabupaten Solok berdasarkan 
                    Undang-Undang Nomor 38 Tahun 2003. Pada awal pembentukannya, 
                    kabupaten ini terdiri dari 5 kecamatan.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-500 text-white font-bold">
                    <Clock size={24} />
                  </div>
                  <div className="h-full w-0.5 bg-primary-200 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">2005 - 2010</h3>
                  <p className="text-gray-700">
                    Periode awal pembangunan dengan fokus pada infrastruktur dasar 
                    dan penataan struktur pemerintahan. Pembangunan jalan dan fasilitas 
                    publik menjadi prioritas untuk membuka akses ke berbagai wilayah.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-500 text-white font-bold">
                    <Clock size={24} />
                  </div>
                  <div className="h-full w-0.5 bg-primary-200 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">2010 - 2018</h3>
                  <p className="text-gray-700">
                    Pengembangan potensi pariwisata dan ekonomi lokal mulai digalakkan. 
                    Beberapa destinasi wisata alam mulai dikenal luas dan menarik wisatawan. 
                    Penambahan 2 kecamatan baru menjadikan total 7 kecamatan.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-500 text-white font-bold">
                    <Clock size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">2018 - Sekarang</h3>
                  <p className="text-gray-700">
                    Fokus pada pembangunan berkelanjutan dan pelestarian budaya. 
                    Pengembangan ekonomi kreatif dan UMKM menjadi salah satu prioritas 
                    untuk meningkatkan kesejahteraan masyarakat. Solok Selatan juga 
                    semakin dikenal sebagai destinasi wisata alternatif di Sumatera Barat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;