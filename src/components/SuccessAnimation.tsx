import React from 'react';
import { Check } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


interface SuccessAnimationProps {
  message: string;
}

export function SuccessAnimation({ message }: SuccessAnimationProps) {
  return (
    <div className="flex flex-col items-center  justify-center space-y-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-[#37e5a5]/10 flex items-center justify-center animate-[scale_0.3s_ease-in-out]">
          <div className="w-12 h-12 rounded-full bg-[#37e5a5]/20 flex items-center justify-center animate-[scale_0.35s_ease-in-out]">
            <div className="w-8 h-8 rounded-full bg-[#37e5a5] flex items-center justify-center animate-[scale_0.4s_ease-in-out]">
              <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-[#131313] animate-[bounce_0.5s_ease-in-out]" />
            </div>
          </div>
        </div>
      </div     >
      <p className="text-[#fdfff5]/80 font-medium text-center animate-[fadeIn_0.5s_ease-in-out]">
        {message}
      </p>
    </div>
  );
}