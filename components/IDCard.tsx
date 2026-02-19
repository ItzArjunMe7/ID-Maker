
import React, { useState } from 'react';
import { IDCardData } from '../types.ts';
import { COLLEGE_INFO, DEFAULT_PHOTO, DEFAULT_SIGN, PRINCIPAL_SIGN, COLLEGE_BUILDING_IMAGE, COLLEGE_LOGO } from '../constants.tsx';

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
    <div id={id} className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-[500px] border border-gray-100 w-[320px] shrink-0 box-border">
      {/* Top Header Section */}
      <div className="bg-[#EBF3FF] p-3 border-b border-gray-100 flex items-center h-[110px]">
        <div className="flex-shrink-0 mr-2 ml-1">
           <img src={COLLEGE_LOGO} alt="Logo" className="w-16 h-16 object-contain rounded-full bg-white p-0.5 shadow-sm" />
        </div>
        <div className="flex-1 text-center">
          <p className="text-[10px] font-bold text-blue-600 uppercase tracking-tight leading-none mb-1">{COLLEGE_INFO.trustName}</p>
          <p className="text-[14px] font-black text-red-600 leading-tight mb-1">{COLLEGE_INFO.campusName}</p>
          <div className="space-y-0.5 text-gray-700">
            <p className="text-[8px] font-medium leading-none">{COLLEGE_INFO.location}</p>
            <p className="text-[8px] font-medium leading-none">{COLLEGE_INFO.email}</p>
            <p className="text-[8px] font-bold leading-none">{COLLEGE_INFO.contact}</p>
          </div>
        </div>
      </div>

      <div className="p-3 flex flex-col items-center text-center flex-grow">
        <h1 className="text-[11px] font-black text-blue-800 leading-tight uppercase mb-1 px-1">{COLLEGE_INFO.collegeName}</h1>
        <p className="text-[6px] text-gray-500 leading-tight mb-2 px-3 italic font-medium">{COLLEGE_INFO.accreditation}</p>
        
        {/* Academic Year Pill */}
        <div className="mb-3">
          <p className="text-[10px] font-black text-gray-700 bg-white px-5 py-0.5 rounded-full border border-gray-200">{COLLEGE_INFO.academicYear}</p>
        </div>

        {/* Student Photo */}
        <div className="w-28 h-32 mb-4 border-2 border-red-500 rounded-lg overflow-hidden shadow-sm flex-shrink-0">
          <img src={data.photoUrl || DEFAULT_PHOTO} alt="Student" className="w-full h-full object-cover" />
        </div>

        {/* Info Rows */}
        <div className="w-full space-y-3 text-left text-[11px] font-bold text-gray-900 px-4">
          <div className="flex items-center">
            <span className="w-14 text-gray-400 uppercase text-[9px] font-black">Name</span>
            <span className="mr-3 text-gray-900">:</span>
            <span className="flex-1 uppercase font-black truncate">{data.name || '---'}</span>
          </div>
          <div className="flex items-center border-t border-gray-50 pt-2">
            <span className="w-14 text-gray-400 uppercase text-[9px] font-black">ID NO.</span>
            <span className="mr-3 text-gray-900">:</span>
            <span className="flex-1 font-black truncate uppercase">{data.idNo || '---'}</span>
          </div>
          <div className="flex items-center border-t border-gray-50 pt-2">
            <span className="w-14 text-gray-400 uppercase text-[9px] font-black">Level</span>
            <span className="mr-3 text-gray-900">:</span>
            <span className="flex-1 font-black truncate uppercase">{data.level || '---'}</span>
          </div>
          <div className="flex items-center border-t border-gray-50 pt-2">
            <span className="w-14 text-gray-400 uppercase text-[9px] font-black">Branch</span>
            <span className="mr-3 text-gray-900">:</span>
            <span className="flex-1 uppercase font-black truncate">{data.branch || '---'}</span>
          </div>
        </div>

        {/* Signatures */}
        <div className="mt-auto w-full flex justify-between items-end px-4 pb-2 pt-4">
          <div className="flex flex-col items-center w-24">
            <div className="h-6 w-full border-b border-gray-400 flex items-center justify-center mb-1 overflow-hidden">
              <img src={data.signatureUrl || DEFAULT_SIGN} alt="Student Sign" className="max-h-full max-w-full object-contain" />
            </div>
            <span className="text-[7px] font-black text-blue-600 uppercase">STUDENT SIGN.</span>
          </div>
          <div className="flex flex-col items-center w-24">
            <div className="h-6 w-full flex items-center justify-center mb-1 overflow-hidden">
               <img src={PRINCIPAL_SIGN} alt="Principal Sign" className="max-h-full max-w-full object-contain opacity-80" />
            </div>
            <span className="text-[7px] font-black text-blue-600 uppercase">PRINCIPAL SIGN.</span>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Bar */}
      <div className="h-2.5 bg-blue-600 w-full mt-auto"></div>
    </div>
  );

  const BackSide = ({ id }: { id?: string }) => (
    <div id={id} className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col h-[500px] border border-gray-100 w-[320px] shrink-0 box-border">
      <div className="h-28 w-full overflow-hidden border-b border-gray-100 relative shrink-0">
        <img src={COLLEGE_BUILDING_IMAGE} alt="College Building" className="w-full h-full object-cover" />
      </div>
      
      {/* General Information Bar */}
      <div className="w-full text-center bg-[#2B6BE5] py-2 shrink-0">
        <h2 className="text-white text-[11px] font-black uppercase tracking-[0.2em]">General Information</h2>
      </div>

      <div className="p-6 flex flex-col flex-grow space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-400 text-[9px] uppercase font-black tracking-widest mb-1">Current Address</label>
            <p className="text-gray-800 font-bold text-[11px] leading-snug break-words">
              {data.address || 'Not Provided'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-[9px] uppercase font-black tracking-widest mb-1">Mobile Number</label>
              <p className="text-gray-900 font-black text-[13px]">{data.mobile || '---'}</p>
            </div>
            <div>
              <label className="text-gray-400 text-[9px] uppercase font-black tracking-widest mb-1">Date of Birth</label>
              <p className="text-gray-900 font-black text-[13px]">{data.dob || '---'}</p>
            </div>
          </div>

          <div>
            <label className="text-gray-400 text-[9px] uppercase font-black tracking-widest mb-1">Email Address</label>
            <p className="text-gray-900 font-black text-[13px] lowercase truncate">{data.email || '---'}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-[10px] font-black text-gray-800 mb-2 uppercase tracking-widest underline decoration-2 underline-offset-4">RULES & REGULATIONS:</p>
          <ul className="text-[9px] text-gray-600 space-y-1.5 font-bold">
            <li className="flex gap-1.5"><span>1.</span> The card is non-transferable.</li>
            <li className="flex gap-1.5"><span>2.</span> Card should be surrendered while leaving the institute.</li>
            <li className="flex gap-1.5"><span>3.</span> Loss of card must be reported to the office immediately.</li>
          </ul>
        </div>

        <div className="mt-auto pt-4 text-center">
          <p className="text-[10px] text-gray-500 italic leading-relaxed px-4 font-bold">
            "Education is the most powerful weapon which you can use to change the world."
          </p>
        </div>
      </div>
      
      {/* Footer Return Notice */}
      <div className="py-2.5 bg-gray-50 text-center border-t border-gray-100 shrink-0">
         <p className="text-[9px] text-gray-400 font-black uppercase tracking-wider">RETURN TO THE COLLEGE ADDRESS IF FOUND.</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <div style={containerStyle} className="transition-all duration-500 relative">
        {isFront ? <FrontSide id="id-card-front" /> : <BackSide id="id-card-back" />}
      </div>
      
      {/* Dedicated Capture Area for High-Res Export */}
      <div className="fixed -left-[9999px] top-0 pointer-events-none">
        <div id="capture-front-container"><FrontSide /></div>
        <div id="capture-back-container"><BackSide /></div>
        <div id="capture-combined-container" className="flex flex-row p-12 bg-white gap-10 items-center justify-center" style={{ width: '740px', height: '600px' }}>
           <FrontSide />
           <BackSide />
        </div>
      </div>
      
      <button 
        onClick={() => setIsFront(!isFront)} 
        className="mt-6 no-print px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-100 transform active:scale-95"
      >
        Flip View
      </button>
    </div>
  );
};

export default IDCard;
