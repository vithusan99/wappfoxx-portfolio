import { ArrowUpRight, ChevronLeft, ChevronRight, CreditCard, Eye, Goal, HandHeart, Handshake, Play, Plus, Star, Target, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);

  const reviews = [
    {
      id: 1,
      text: "With WappFoxx, we finally had clarity on costs and a partner who understood our needs. The process was simple, transparent.",
      author: "Annette Black",
      timeAgo: "2 days ago",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 2,
      text: "With WappFoxx, we finally had clarity on costs and a partner who understood our needs. The process was simple, transparent.",
      author: "Adam Poul",
      timeAgo: "2 days ago",
      rating: 4.5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 3,
      text: "With WappFoxx, we finally had clarity on costs and a partner who understood our needs. The process was simple, transparent.",
      author: "Herath Malwansa",
      timeAgo: "2 days ago",
      rating: 3.5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 4,
      text: "Exceptional service and outstanding results. WappFoxx delivered exactly what we needed on time and within budget.",
      author: "John Smith",
      timeAgo: "1 week ago",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 5,
      text: "Professional team with great communication. They made our complex project look easy and delivered amazing results.",
      author: "Sarah Johnson",
      timeAgo: "3 days ago",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 6,
      text: "Highly recommend WappFoxx for their expertise and customer service. They went above and beyond our expectations.",
      author: "Mike Wilson",
      timeAgo: "5 days ago",
      rating: 4.5,
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfDJ8MHx8fDA%3D"
    }
  ];
  const services = ["App Development", "Website Development", "Software Solutions", "SEO & SEA", "Graphics & Animation", "Digital Marketing"]
  const projects = [
    {
      imgUrl: '/project-1.png',
      name: 'DIGITAL INNOVATION CENTER',
      description: 'An engaging platform dedicated to pioneering digital experiences and innovative design solutions.',
      link: 'https://www.digitalinnovationcenter.com'
    },
    {
      imgUrl: '/project-2.png',
      name: 'DIGITAL INNOVATION LAB',
      description: 'A vibrant space for exploring groundbreaking digital technologies and inspiring design concepts.',
      link: 'https://www.digitalinnovationlab.com'
    },
    {
      imgUrl: '/project-3.png',
      name: 'DIGITAL INNOVATION STUDIO',
      description: 'A dynamic hub for showcasing transformative digital products and exceptional creative strategies.',
      link: 'https://www.digitalinnovationstudio.com'
    },
    {
      imgUrl: '/project-4.png',
      name: 'DIGITAL INNOVATION AGENCY',
      description: 'A forward-thinking platform that highlights innovative digital services and outstanding design excellence.',
      link: 'https://www.digitalinnovationagency.com'
    }
  ]

  // update slides per view based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const maxSlides = Math.max(0, reviews.length - slidesPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1));
  };

  const renderStars = (rating: any) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <Star className="absolute w-4 h-4 text-gray-600" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star key={i} className="w-4 h-4 text-gray-600" />
        );
      }
    }
    return stars;
  };

  const reviewsLeft = reviews.length - (currentSlide + slidesPerView);

  return (
    <>
      <section className=" bg-black text-white px-5 md:px-12 py-10 md:py-15 ">
        <h2 className="text-5xl font-bold text-center">Our <span className="text-orange-500">Services</span> at a Glance</h2>
        <p className="text-center text-lg mt-2 max-w-xl mx-auto text-[#B4B4B4]">
          From websites to apps, software, SEO, and design — WappFoxx provides all digital services in one place.
        </p>
        <div className="max-w-7xl my-10 mx-auto flex item-center md:justify-around gap-4 overflow-x-auto md:snap-none snap-x snap-mandatory scrollbar-hide ">
          {services.map(service => (
            <button key={service} className="px-6 py-3 border border-gray-700 rounded hover:bg-orange-500 flex-shrink-0 snap-center ">
              {service}
            </button>
          ))}
        </div>
        <div className="max-w-7xl  md:grid md:grid-cols-5 items-center mx-auto">
          <div className="md:col-span-2 z-2">
            <h2 className="text-4xl font-bold leading-snug ">
              CREATE AN EXPERIENCE <br /> WITH YOUR APP
            </h2>
            <p className="mt-4 text-[#6C6C6C] text-xl">
              A well-designed app can prove extremely profitable for your business in the long run,
              as it can ultimately create compelling content that attracts users.
            </p>
            <button className="mt-6 px-6 py-3 border border-gray-700 rounded hover:bg-orange-500 text-lg cursor-pointer">
              Book an appointment
            </button>
          </div>
          <div className="md:col-span-3 md:flex items-end justify-end">
            <img src="/service-mobile-img.png" alt="service-img" className="w-auto object-cover " />
          </div>
        </div>
      </section>
      <section className="bg-black text-white px-5 md:px-12 py-10 md:py-15">
        <h2 className="text-5xl font-bold text-center">Why Choose <span className="text-orange-500">WappFoxx</span></h2>
        <p className="text-center text-lg mt-4 md:mt-6 max-w-xl mx-auto text-[#B4B4B4]">
          Wir vereinen Kreativität, Technologie und klare Prozesse, um digitale Lösungen einfach,
          transparent und erfolgreich umzusetzen.
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 md:mt-12">
          <div className="bg-neutral-900 p-5 ">
            <CreditCard className="w-10 h-10 p-2 mb-4 bg-orange-500" />
            <h3 className="text-2xl font-semibold text-white">Transparente Preise</h3>
            <p className="text-gray-400 text-lg mt-2">
              Mit unserem Preiskonfigurator sehen Sie sofort alle Kosten – ohne versteckte Gebühren.
            </p>
          </div>
          <div className="bg-neutral-900 p-6 ">
            <Zap className="w-10 h-10 p-2 mb-4 bg-orange-500" />
            <h3 className="text-2xl font-semibold text-white">Effiziente Umsetzung</h3>
            <p className="text-gray-400 text-lg mt-2">
              Strukturierte Abläufe und ein erfahrenes Team bringen Ihr Projekt schnell ins Ziel.
            </p>
          </div>
          <div className="bg-neutral-900 p-6 ">
            <Handshake className="w-10 h-10 p-2 mb-4 bg-orange-500" />
            <h3 className="text-2xl font-semibold text-white">Persönliche Beratung</h3>
            <p className="text-gray-400 text-lg mt-2">
              Unsere Experten begleiten Sie individuell – von der ersten Idee bis zum fertigen Projekt.
            </p>
          </div>
          <div className="bg-neutral-900 p-6 ">
            <Goal className="w-10 h-10 p-2 mb-4 bg-orange-500" />
            <h3 className="text-2xl font-semibold text-white">Individuelle Lösungen</h3>
            <p className="text-gray-400 text-lg mt-2">
              Ob Website, App oder Marketing – wir entwickeln Lösungen, die exakt zu Ihrem Unternehmen passen.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black text-white px-5 md:px-12 py-10 md:py-15">
        <h2 className="text-5xl font-bold text-center">Innovative Minds, <br /><span className="text-orange-500">Exceptional</span> Results</h2>
        <p className="text-center text-lg mt-4 md:mt-6 max-w-xl mx-auto text-[#B4B4B4]">
          We combine creativity, technology, and transparency to make digitalization simple, affordable, and effective.
        </p>
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          {!isPlaying ? (
            <>
              {/* thumbnail */}
              <img
                src="/result-img.png"
                alt="video thumbnail"
                className="w-full h-full object-cover"
              />

              <button
                onClick={() => setIsPlaying(true)}
                className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg">
                  <Play className="w-8 h-8 text-white fill-orange-500 " />
                </div>
              </button>
            </>
          ) : (
            // <video
            //   src="https://youtu.be/tNrNLoCqzco?si=k7B5IXaqfpAW42EX"
            //   autoPlay
            //   controls
            //   className="w-full h-full object-cover"
            // />
            <iframe
              className="w-full h-full"
              // src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&rel=0"
              src="https://www.youtube.com/embed/tNrNLoCqzco?si=mCqUV9xYh_ibmBn6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            // <iframe width="560" height="315" src="https://www.youtube.com/embed/tNrNLoCqzco?si=mCqUV9xYh_ibmBn6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          )}
        </div>
        {/* <img src="/result-img.png" alt="result-image" className="w-[100%] md:w-[80%] max-w-7xl h-[300px] md:h-auto object-cover mx-auto mt-6 md:mt-10 " /> */}
      </section>
      <section className="bg-black text-white px-5 md:px-12 pt-12 pb-10 md:py-15">
        <h2 className="text-5xl font-bold text-center">Check Out <span className="text-orange-500">Our Latest</span><br /> Project Listings</h2>
        <p className="text-center text-lg mt-4 md:mt-6 max-w-xl mx-auto text-[#B4B4B4]">
          Discover our latest project listings for innovative and exciting opportunities. Check out what’s new today!
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 md:mt-12">
          {projects.map((project, index) => (
            <div key={index} className="project-card md:even:mt-15 ">
              <div className="relative">
                <img src={project.imgUrl} alt="project-image" className="w-[100%] h-[400px] md:h-[500px] mb-5 object-cover " />
                <button
                  className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg">
                    <Play className="w-8 h-8 text-white fill-orange-500 " />
                  </div>
                </button>
              </div>
              <h4 className="text-2xl font-bold">{project.name}</h4>
              <p className=" text-base my-1 md:my-2 text-[#B4B4B4]">
                {project.description}
              </p>
              <div className="flex items-center space-x-2 ">
                <ArrowUpRight className="w-5 h-5 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base md:text-lg decoration-0 truncate break-words">{project.link}</a>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[100%] flex items-center mt-20">
          <button className="mx-auto  px-6 py-3 border border-gray-700 rounded hover:bg-orange-500 text-lg cursor-pointer">
            Book an appointment
          </button>
        </div>
      </section>
      <section className="bg-black text-white px-5 md:px-12 py-10 md:py-15">
        <h2 className="text-5xl font-bold text-center">Innovative Minds, <br /> Exceptional <span className="text-orange-500">Results</span></h2>
        <p className="text-center text-lg mt-4 md:mt-6 max-w-xl mx-auto text-[#B4B4B4]">
          We combine creativity, technology, and transparency to make digitalization simple, affordable, and effective.
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 md:mt-5 items-center">
          <div className="md:col-span-1">
            <div className="bg-neutral-900 p-6 mb-6">
              <div className="flex item-center space-x-5 mb-6">
                <HandHeart className="w-10 h-10 p-2 bg-orange-500" />
                <h3 className="text-2xl font-semibold text-white">Our Promise</h3>
              </div>
              <p className="text-gray-400 text-lg">
                Delivering excellence with every project, every time.
              </p>
            </div>
            <div className="bg-neutral-900 p-6 mb-6">
              <div className="flex item-center space-x-5 mb-4">
                <Target className="w-10 h-10 p-2 bg-orange-500" />
                <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-400 text-lg mt-2">
                Empowering brands with tailored, impactful solutions.
              </p>
            </div>
            <div className="bg-neutral-900 p-6 mb-6">
              <div className="flex item-center space-x-5 mb-4">
                <Eye className="w-10 h-10 p-2 bg-orange-500" />
                <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-400 text-lg mt-2">
                Leading in digital innovation to drive client success.
              </p>
            </div>
          </div>
          <div className="md:col-span-1  md:flex items-end justify-end">
            <img src="/innovat-img.png" alt="innovative-img" className=" bottom-0 left-0 w-full mask-b-from-50% mask-b-to-90%" />
          </div>
        </div>
        <div className="mt-5 md:flex justify-around ">
          <div className="bg-neutral-900 p-5 my-4 mx-auto md:m-0 max-w-[80%] w-60 text-center ">
            <div className="flex justify-center items-center mb-2">
              <h3 className="text-3xl font-semibold text-white">300</h3>
              <Plus className="w-7 h-7 stroke-4 text-orange-500" />
            </div>
            <p className="text-gray-400 text-base mt-2">
              Projects Completed
            </p>
          </div>
          <div className="bg-neutral-900 p-5 my-4 mx-auto md:m-0 max-w-[80%] w-60 text-center ">
            <div className="flex justify-center items-center mb-2">
              <h3 className="text-3xl font-semibold text-white">10</h3>
              <Plus className="w-7 h-7 stroke-4 text-orange-500" />
            </div>
            <p className="text-gray-400 text-base mt-2">
              Years of Experience
            </p>
          </div>
          <div className="bg-neutral-900 p-5 my-4 mx-auto md:m-0 max-w-[80%] w-60 text-center ">
            <div className="flex justify-center items-center mb-2">
              <h3 className="text-3xl font-semibold text-white">500</h3>
              <Plus className="w-7 h-7 stroke-4 text-orange-500" />
            </div>
            <p className="text-gray-400 text-base mt-2">
              Satisfied Clients
            </p>
          </div>
          <div className="bg-neutral-900 p-5 my-4 mx-auto md:m-0 max-w-[80%] w-60 text-center">
            <div className="flex justify-center items-center mb-2">
              <h3 className="text-3xl font-semibold text-white">20</h3>
              <Plus className="w-7 h-7 stroke-4 text-orange-500" />
            </div>
            <p className="text-gray-400 text-base mt-2">
              Award-Winning works
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black text-white px-5 md:px-12 md:pt-20 pb-10">
        <div className="max-w-7xl mx-auto">

          <div className="md:flex items-center justify-between mb-8 md:mb-12">
            <div className="text-center md:text-left md:flex items-center space-x-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-orange-400">Google</span> <br className="md:hidden" /> Reviews
              </h2>
            </div>
            {/* rating budge */}
            <div className="flex items-center space-x-3 border border-[#FFFFFF1A] px-4 py-2 rounded-4xl mt-3 md:m-0">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold text-lg">G</span>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-lg">4.9/5</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-400">Based on 2.8k reviews</p>
              </div>
            </div>
          </div>
          {/* carousel box */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`
                }}
              >
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / slidesPerView}%` }}
                  >
                    <div className="bg-neutral-900 rounded-lg p-6 h-full border border-gray-800">
                      <p className="text-gray-300 mb-6 italic leading-relaxed">
                        {review.text}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={review.avatar}
                            alt={review.author}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium text-white">{review.author}</p>
                            <p className="text-sm text-gray-400">{review.timeAgo}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* reviews indicator */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-2">
              {/* arrow btns */}
              {/* absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 */}
              <button
                onClick={prevSlide}
                className="cursor-pointer w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors border border-gray-700"
                disabled={currentSlide === 0} >
                <ChevronLeft className="w-5 h-5 text-gray-300" />
              </button>
              {/* absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 */}
              <button
                onClick={nextSlide}
                className="cursor-pointer w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors border border-gray-700"
                disabled={currentSlide >= maxSlides} >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              {reviewsLeft > 0 ? `${reviewsLeft} left` : 'All reviews shown'}
            </p>
          </div>
        </div>
      </section>
      <section className=" bg-black text-white px-5 md:px-12 py-10 ">
        <div className="max-w-7xl  md:grid md:grid-cols-5 items-center mx-auto">
          <div className="md:col-span-3 md:flex items-end justify-end">
            <img src="/journey-img.png" alt="journey-img" className="w-auto object-cover" />
          </div>
          <div className="md:col-span-2 z-2">
            <h2 className="text-4xl font-bold leading-snug ">
              Ready to Start Your <br /> Digital <span className="text-orange-500">Journey?</span>
            </h2>
            <p className="mt-4 text-[#6C6C6C] text-xl">
              We combine creativity, technology, and transparency to make digitalization simple, affordable, and effective.
            </p>
            <button className="cursor-pointer mt-6 px-6 py-3 border border-gray-700 rounded text-black bg-white hover:bg-orange-500 hover:text-white text-lg">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
