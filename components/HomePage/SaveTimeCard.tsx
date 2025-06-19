// components/HomePage/SaveTimeCard.tsx
import Image from 'next/image';

const SaveTimeCard = () => {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white max-w-sm">
      <div className="mb-4">
        <Image
          src="/feedback.png"
          alt="Test Ideas"
          width={142}
          height={80}
        />
      </div>
      <h3 className="text-xl font-semibold text-blue-900 leading-tight mb-2">
        Test Your Ideas
      </h3>
      <p className="text-sm text-gray-600">
        State your ideas into our communities and get feedback. This can be technical feasbility feedback, or details about market dynamics, information about competition, or details about current technologies which could be leveraged. 
      </p>
    </div>
  );
};

export default SaveTimeCard;

