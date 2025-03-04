import React from 'react';

interface ProfileSelectorProps {
  onSelectProfile: (profile: string) => void;
}

const ProfileSelector: React.FC<ProfileSelectorProps> = ({ onSelectProfile }) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-semibold mb-4">Selecciona tu perfil</h1>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => onSelectProfile('Alain')}
        >
          Alain
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
          onClick={() => onSelectProfile('Checo')}
        >
          Checo
        </button>
      </div>
    </div>
  );
};

export default ProfileSelector;