
import React, { useState } from 'react';
import { IDCardData } from '../types';
import { COLLEGE_INFO, DEFAULT_PHOTO, DEFAULT_SIGN, PRINCIPAL_SIGN, COLLEGE_BUILDING_IMAGE, COLLEGE_LOGO } from '../constants';

interface IDCardProps {
  data: IDCardData;
  scale?: number;
}

const IDCard: React.FC<IDCardProps> = ({ data, scale = 1 }) => {
  const [isFront, setIsFront] = useState(true);

  const containerStyle = {
    width: '320px',
    height: '500px',
    transform: `scale(${scale})`,
    transformOrigin: 'top center',
  };

  const FrontSide = ({ id }: { id?: string }) => (
    <div id={id} className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-full border border-gray-200 w-[320px] min-h-[500px]">
      {/* Header section with logo - Enhanced Font Sizes */}
      <div className="bg-blue-100 p-2 border-b border-blue-200 relative flex items-center h-[90px]">
        <div className="flex-shrink-0 mr-1 ml-4">
           <img 
            src={COLLEGE_LOGO} 
            alt="Logo" 
            className="w-16 h-16 object-contain rounded-full bg-white/50 p-0.5 shadow-sm"
          />
        </div>
        <div className="flex-1 text-center pr-2">
          <p className="text-[10px] font-bold text-blue-800 tracking-tight leading-none mb-0.5 uppercase">
            {COLLEGE_INFO.trustName}
          </p>
          <p className="text-[14px] font-extrabold text-red-600 leading-tight mb-0.5">
            {COLLEGE_INFO.campusName}
          </p>
          <div className="space-y-0 text-gray-700">
            <p className="text-[9px] font-medium leading-tight">{COLLEGE_INFO.location}</p>
            <p className="text-[9px] font-medium leading-tight">{COLLEGE_INFO.email}</p>
            <p className="text-[9px] font-bold leading-tight">Contact No. {COLLEGE_INFO.contact}</p>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 items-center text-center overflow-hidden">
        <h1 className="text-[13px] font-extrabold text-blue-700 leading-tight uppercase mb-0.5 drop-shadow-sm line-clamp-2">
          {COLLEGE_INFO.collegeName}
        </h1>
        <p className="text-[7px] text-gray-500 leading-[1.1] mb-2 px-4 italic line-clamp-2">
          {COLLEGE_INFO.accreditation}
        </p>
        <div className="flex justify-center w-full mb-3">
          <p className="text-[11px] font-bold text-gray-700 bg-gray-100 px-3 py-0.5 rounded-full border border-gray-200">
            {COLLEGE_INFO.academicYear}
          </p>
        </div>

        {/* Student Photo */}
        <div className="w-28 h-28 mb-3 border-2 border-red-500 rounded-lg overflow-hidden shadow-md flex-shrink-0">
          <img 
            src={data.photoUrl || DEFAULT_PHOTO} 
            alt="Student" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Detail Rows */}
        <div className="w-full space-y-1.5 text-left text-[11px] font-medium text-gray-800 px-2 flex-1">
          <div className="flex border-b border-gray-50 pb-0.5 items-baseline">
            <span className="w-14 text-gray-400 uppercase text-[8px] flex-shrink-0">Name</span>
            <span className="mr-2 text-gray-400 flex-shrink-0">:</span>
            <span className="flex-1 uppercase font-bold text-gray-900 leading-tight line-clamp-2 break-all">{data.name || '---'}</span>
          </div>
          <div className="flex border-b border-gray-50 pb-0.5 items-baseline">
            <span className="w-14 text-gray-400 uppercase text-[8px] flex-shrink-0">ID No.</span>
            <span className="mr-2 text-gray-400 flex-shrink-0">:</span>
            <span className="flex-1 font-bold text-gray-900 truncate">{data.idNo || '---'}</span>
          </div>
          <div className="flex border-b border-gray-50 pb-0.5 items-baseline">
            <span className="w-14 text-gray-400 uppercase text-[8px] flex-shrink-0">Level</span>
            <span className="mr-2 text-gray-400 flex-shrink-0">:</span>
            <span className="flex-1 font-bold text-gray-900 truncate">{data.level || '---'}</span>
          </div>
          <div className="flex border-b border-gray-50 pb-0.5 items-baseline">
            <span className="w-14 text-gray-400 uppercase text-[8px] flex-shrink-0">Branch</span>
            <span className="mr-2 text-gray-400 flex-shrink-0">:</span>
            <span className="flex-1 uppercase font-bold text-gray-900 leading-tight line-clamp-2 break-all">{data.branch || '---'}</span>
          </div>
        </div>

        {/* Signatures */}
        <div className="mt-auto w-full flex justify-between items-end pb-8 pt-4 px-4 flex-shrink-0">
          <div className="flex flex-col items-center">
            <div className="h-8 w-20 mb-1 border-b border-gray-400 flex items-center justify-center">
              <img src={data.signatureUrl || DEFAULT_SIGN} alt="Student Sign" className="max-h-full max-w-full object-contain" />
            </div>
            <span className="text-[8px] font-bold text-blue-700 uppercase tracking-tighter">Student Sign.</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-20 mb-1 flex items-center justify-center overflow-hidden">
               <img src={PRINCIPAL_SIGN} alt="Principal Sign" className="max-h-full max-w-full object-cover opacity-80" />
            </div>
            <span className="text-[8px] font-bold text-blue-700 uppercase tracking-tighter">Principal Sign.</span>
          </div>
        </div>
      </div>
      
      <div className="h-2 bg-blue-500 w-full mt-auto"></div>
    </div>
  );

  const BackSide = ({ id }: { id?: string }) => (
    <div id={id} className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-full border border-gray-200 w-[320px] min-h-[500px]">
      {/* College Building Image header */}
      <div className="h-28 w-full overflow-hidden border-b border-gray-100 relative flex-shrink-0">
        <img 
          src={COLLEGE_BUILDING_IMAGE} 
          alt="College Building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full text-center bg-blue-600/80 py-1">
          <h2 className="text-white text-[10px] font-bold uppercase tracking-widest">General Information</h2>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1 space-y-3 overflow-hidden">
        <div className="space-y-3 text-sm flex-1 overflow-hidden">
          <div className="flex flex-col">
            <label className="text-gray-400 text-[9px] uppercase font-bold tracking-tighter">Current Address</label>
            <div className="mt-0.5">
              <p className="text-gray-800 font-medium text-[10px] leading-[1.3] line-clamp-4 break-words" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {data.address || 'Not Provided'}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-[9px] uppercase font-bold tracking-tighter">Mobile Number</label>
              <p className="text-gray-800 font-bold mt-0.5 text-[11px] truncate">{data.mobile || '---'}</p>
            </div>
            <div>
              <label className="text-gray-400 text-[9px] uppercase font-bold tracking-tighter">Date of Birth</label>
              <p className="text-gray-800 font-bold mt-0.5 text-[11px] truncate">{data.dob || '---'}</p>
            </div>
          </div>

          <div>
            <label className="text-gray-400 text-[9px] uppercase font-bold tracking-tighter">Email Address</label>
            <p className="text-gray-800 font-bold mt-0.5 text-[11px] lowercase truncate">{data.email || '---'}</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-2 flex-shrink-0">
          <p className="text-[9px] font-bold text-gray-700 mb-1 uppercase tracking-wider underline">Rules & Regulations:</p>
          <ul className="text-[8px] text-gray-600 space-y-0.5 list-decimal pl-4">
            <li>The card is non-transferable.</li>
            <li>Card should be surrendered while leaving the institute.</li>
            <li>Loss of card must be reported to the office immediately.</li>
          </ul>
        </div>

        <div className="mt-auto border-t pt-3 text-center flex-shrink-0">
          <p className="text-[9px] text-gray-500 italic leading-tight line-clamp-2">
            "Education is the most powerful weapon which you can use to change the world."
          </p>
        </div>
      </div>
      
      <div className="p-2 bg-blue-50 text-center border-t flex-shrink-0">
         <p className="text-[8px] text-gray-400 leading-none">Return to the college address if found.</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      {/* Display version */}
      <div style={containerStyle} className="transition-all duration-500 relative">
        {isFront ? (
          <FrontSide id="id-card-front" />
        ) : (
          <BackSide id="id-card-back" />
        )}
      </div>

      {/* Hidden versions for capture */}
      <div className="fixed -left-[4000px] top-0 pointer-events-none">
        <div id="capture-front-container">
           <FrontSide />
        </div>
        <div id="capture-back-container">
           <BackSide />
        </div>
        {/* SIDE BY SIDE CONTAINER */}
        <div id="capture-combined-container" className="flex flex-row space-x-10 p-10 bg-gray-50">
           <FrontSide />
           <BackSide />
        </div>
      </div>

      <button 
        onClick={() => setIsFront(!isFront)}
        className="mt-4 no-print px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold transition-all shadow-md transform active:scale-95"
      >
        Flip Card
      </button>
    </div>
  );
};

export default IDCard;
