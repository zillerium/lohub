// components/ComparisonCard.tsx
import Image from 'next/image';

const ComparisonCard = () => {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white max-w-sm">
      <div className="mb-4">
        <Image
          src="/CoFounders1.png" // <- Place your image in the /public/icons directory
          alt="Co-Founders"
          width={142}
          height={80}
        />
      </div>
      <h3 className="text-xl font-semibold text-blue-900 leading-tight mb-2">
        Find Your Co-Founder
      </h3>
      <p className="text-sm text-gray-600">
      Connect with startup founders and find someone to compliment your skills, either in market, legal, technical, management, or technology.

      </p>
    </div>
  );
};

export default ComparisonCard;

