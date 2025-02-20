import { X } from 'lucide-react';
import { useState } from 'react';
import { SuccessAnimation } from './SuccessAnimation';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const [activeTab, setActiveTab] = useState('package');
  const [formData, setFormData] = useState({
    businessName: '',
    phone: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#191919] rounded-xl w-full max-w-md shadow-2xl">
        <div className="p-6">
          {isSubmitted ? (
            <SuccessAnimation message="Response recorded" />
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-l font-[600] bg-[#fdfff5]/70 bg-clip-text text-transparent">
                  Early Partner Registration
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex mb-6 bg-[#131313] rounded-full p-1">
                <button
                  className={`flex-1 py-2 text-center font-[500] text-sm rounded-full transition-colors ${
                    activeTab === 'package'
                      ? 'bg-[#37e5a5]/90 text-black/90'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  onClick={() => setActiveTab('package')}
                >
                  Tourist Package
                </button>
                <button
                  className={`flex-1 py-2 text-center font-[500] rounded-full text-sm transition-colors ${
                    activeTab === 'vehicle'
                      ? 'bg-[#37e5a5]/90 text-black/90'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  onClick={() => setActiveTab('vehicle')}
                >
                  Tourist Vehicle
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#131313] border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-[#37e5a5]/50 text-gray-300 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#131313] border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-[#37e5a5]/50 text-gray-300 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#131313] border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-[#37e5a5]/50 text-gray-300 placeholder-gray-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded-full bg-[#37e5a5]/90 text-black font-medium"
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}