// components/HomePage/LetThemComeCard.tsx
import Image from 'next/image';

const LetThemComeCard = () => {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white max-w-sm">
      <div className="mb-4">
        <Image
          src="/Incurbator.png"
          alt="Incubator"
          width={142}
          height={80}
        />
      </div>
      <h3 className="text-xl font-semibold text-blue-900 leading-tight mb-2">
        Incubate Your Project
      </h3>
      <p className="text-sm text-gray-600">
      Get details of cloud credits, potential clients, investor contacts, business planning, pitching, business models, and social media.
      </p>
    </div>
  );
};

export default LetThemComeCard;

