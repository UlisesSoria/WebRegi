import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, MessageCircle, Star, Shield, Activity, Sparkles, AlertCircle, Calendar, User } from 'lucide-react';
import logoUC from '@/assets/universidad-cuauhtemoc-seeklogo.png';
import profilePic from '@/assets/Regina.jpeg';
import diagnostic from '@/assets/Diagnostico.png'
import coronasyPuentes from '@/assets/CoronasyPuentes.jpeg';
import resinasYAmalgamas from '@/assets/ResinasyAmalgamas.jpeg';
import incrustaciones from '@/assets/Incrustaciones.png'

// --- DATA MODEL ---
const SERVICES_DATA = [
  {
    id: '01',
    step: 'PASO 1',
    title: 'Consulta Inicial',
    items: [
      'Evaluación diagnóstica completa',
      'Radiografías',
      'Limpieza dental'
    ],
    image: diagnostic,
    icon: <Activity className="w-6 h-6" />,
    color: 'bg-blue-50 text-blue-600',
    side: 'right'
  },
  {
    id: '02',
    step: 'PASO 2',
    title: 'Restauración y estética',
    subtitle: '(Resinas, amalgamas)',
    description: 'Eliminamos caries y cambiamos tus viejas amalgamas de metal por resinas estéticas invisibles. Tu diente, como nuevos.',
    image: resinasYAmalgamas,
    icon: <Sparkles className="w-6 h-6" />,
    color: 'bg-blue-50 text-blue-600',
    side: 'left'
  },
  {
    id: '03',
    step: 'PASO 3',
    title: 'Rehabilitación Mayor',
    subtitle: '(Coronas y puentes)',
    description: '¿Dientes dañados o faltantes? Recupera la funcionalidad y estética completa con materiales de alta resistencia.',
    image: coronasyPuentes,
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-blue-50 text-blue-600',
    side: 'right'
  },
  {
    id: '04',
    step: 'PASO 4',
    title: 'Salvamento Dental',
    subtitle: '(Incrustaciones)',
    description: 'Restauraciones parciales de alta precisión para dientes muy dañados, conservando la estructura dental sana.',
    image: incrustaciones,
    icon: <Star className="w-6 h-6" />,
    color: 'bg-blue-50 text-blue-600',
    side: 'left'
  }
];

const CONTACT_INFO = {
  whatsapp: '524427408128',
  email: 'rhernandez50062@ucq.edu.mx',
  location: 'Universidad Cuauhtémoc, Querétaro, México',
  legal: 'Todos los tratamientos son realizados por una estudiante de la Licenciatura en Odontología de la Universidad Cuauhtémoc bajo la supervisión de un Doctor especializado.',
  institution: 'Universidad Cuauhtémoc'
};

// --- COMPONENTS ---

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', comments: '' });

  if (!isOpen) return null;

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hola Regina, me gustaría solicitar una cita.\n\n` +
      `👤 Mis Datos:\n` +
      `Nombre: ${formData.name}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Tratamiento solicitado: ${formData.comments}`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-[#2D78BC] p-6 text-white flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">Solicitar Cita</h3>
            <p className="text-blue-100 text-sm opacity-80">Cuéntanos qué tratamiento necesitas</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">Tu Nombre</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    required
                    type="text"
                    placeholder="Juan Pérez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl font-medium focus:ring-2 focus:ring-[#2D78BC]/20 transition-all outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">Teléfono</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    required
                    type="tel"
                    placeholder="442 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl font-medium focus:ring-2 focus:ring-[#2D78BC]/20 transition-all outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">Tratamiento solicitado</label>
                <textarea
                  placeholder="Resina, amalgama, coronas, puentes, etc."
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl font-medium focus:ring-2 focus:ring-[#2D78BC]/20 transition-all outline-none h-24 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all flex items-center justify-center gap-2"
            >
              Enviar por WhatsApp <MessageCircle className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const WhatsAppButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#2D78BC] hover:bg-[#1a5c96] text-white pl-4 pr-6 py-4 rounded-full shadow-2xl transition-all hover:-translate-y-1 hover:shadow-blue-900/30 group"
    >
      <Calendar className="w-6 h-6" />
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] uppercase font-bold text-blue-100 opacity-80">Agenda tu cita</span>
        <span className="text-base font-bold">Reserva Online</span>
      </div>
    </button>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-white p-1 rounded-xl shadow-lg transform transition-transform group-hover:scale-110">
              <img src={logoUC} alt="UC" className="h-10 w-auto object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-black text-lg tracking-tight ${scrolled ? 'text-[#2D78BC]' : 'text-white'}`}>
                CLÍNICA DENTAL
              </span>
              <span className={`text-[10px] font-bold tracking-[0.2em] ${scrolled ? 'text-gray-500' : 'text-white/80'}`}>
                Regina Hernández
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Inicio', 'Tratamientos', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-bold uppercase tracking-widest hover:text-[#2D78BC] transition-all ${scrolled ? 'text-gray-600 hover:text-[#2D78BC]' : 'text-white/90'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className={scrolled ? "text-gray-900" : "text-white"} /> : <Menu className={scrolled ? "text-gray-900" : "text-white"} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-t shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-[#2D78BC] font-black uppercase tracking-widest text-sm">Inicio</a>
            <a href="#tratamientos" onClick={() => setIsMenuOpen(false)} className="text-[#2D78BC] font-black uppercase tracking-widest text-sm">Tratamientos</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-[#2D78BC] font-black uppercase tracking-widest text-sm">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="inicio" className="relative pt-32 pb-16 min-h-[500px] flex items-center justify-center overflow-hidden bg-[#88C4E8]">
    {/* Decorative Shapes */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -ml-48 -mb-48"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <div className="bg-white/95 rounded-[40px] px-10 py-12 shadow-2xl inline-block transform -rotate-1">
            <h1 className="text-4xl md:text-5xl font-black text-[#2D78BC] mb-4">
              Renueva tu sonrisa
            </h1>
            <p className="text-xl md:text-2xl text-[#2D78BC] font-medium opacity-90 max-w-md">
              Soluciones funcionales sin dolor.
            </p>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 bg-white p-4">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
              alt="Clínica Dental Moderna"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          {/* Floating elements to mimic the 3D tooth/doctor */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center animate-bounce duration-3000">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const InfographicSteps = () => (
  <section id="tratamientos" className="py-24 bg-[#88C4E8] relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">

      {/* Central Path (SVG) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 hidden md:block -translate-x-1/2 opacity-20">
        <div className="h-full w-full bg-blue-900/20 border-l-4 border-dashed border-white"></div>
      </div>

      <div className="space-y-16">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${service.side === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Step Content Card */}
            <div className="w-full md:w-[45%] group">
              <div className="bg-white rounded-[40px] p-8 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative">
                {/* Number Badge */}
                <div className={`absolute -top-6 ${service.side === 'right' ? '-right-4' : '-left-4'} w-16 h-16 bg-[#2D78BC] rounded-full flex items-center justify-center text-white text-2xl font-black shadow-lg z-20`}>
                  {service.id}
                </div>

                <h4 className="text-2xl font-bold text-[#2D78BC] mb-2">{service.title}</h4>
                {service.subtitle && <p className="text-sm font-semibold text-[#2D78BC]/70 mb-4">{service.subtitle}</p>}

                {service.items ? (
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#2D78BC] font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2D78BC] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#2D78BC] opacity-90 leading-relaxed font-normal">
                    {service.description}
                  </p>
                )}
              </div>
            </div>

            {/* Visual Indicator (Floating Tooth Illustration placeholder) */}
            <div className="hidden md:flex w-[10%] justify-center relative z-10">
              <div className="w-12 h-12 bg-white rounded-full border-4 border-[#88C4E8] shadow-md flex items-center justify-center text-[#2D78BC]">
                {service.icon}
              </div>
            </div>

            {/* Image Card (Right/Left side) */}
            <div className="w-full md:w-[45%]">
              <div className="rounded-[40px] overflow-hidden shadow-lg h-48 md:h-64 transform rotate-1 group-hover:rotate-0 transition-transform duration-500 bg-white p-2">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-[32px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contacto" className="bg-[#88C4E8] py-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center space-y-12">

        {/* Call to Action with Photo */}
        <div className="flex flex-col md:flex-row items-center gap-10 bg-white/20 backdrop-blur-md p-10 rounded-[50px] border border-white/30 shadow-2xl relative overflow-hidden group">
          <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-xl flex-shrink-0 transform transition-transform group-hover:scale-105">
            <img
              src={profilePic}
              alt="Agenda tu cita"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-3xl font-black text-[#2D78BC] mb-4">Agenda tu cita y transforma tu sonrisa</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[#2D78BC] font-bold text-lg">
                <MapPin className="w-6 h-6" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3 text-[#2D78BC] font-bold">
                <MessageCircle className="w-6 h-6" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">{CONTACT_INFO.email}</a>
              </div>
              <div className="flex items-center gap-3 text-[#2D78BC] font-bold text-xs opacity-75 mt-4">
                <AlertCircle className="w-6 h-6 shrink-0" />
                <span>{CONTACT_INFO.legal}</span>
              </div>
            </div>
          </div>
        </div>

        {/* UC Logo Placeholder Area */}
        <div className="mt-12 bg-white px-8 py-4 rounded-xl shadow-lg inline-flex items-center justify-center">
          <img src={logoUC} alt="Universidad Cuauhtémoc" className="h-16 object-contain" />
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <InfographicSteps />
      </main>
      <Footer />
      <WhatsAppButton onClick={() => setIsAppointmentModalOpen(true)} />
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </div>
  );
};

export default App;