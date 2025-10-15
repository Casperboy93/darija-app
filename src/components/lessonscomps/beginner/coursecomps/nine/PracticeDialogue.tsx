export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Discussing Weather Plans</h3>
        
        <div className="space-y-4">
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Friend A</div>
            <div>
            <p className="font-medium">Kifash l-jaww l-yum?</p>
              <p className="text-sm text-gray-600 italic">How's the weather today?</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Friend B</div>
            <div>
            <p className="font-medium">L-jaww zin, fih shams w mu3tadil</p>
              <p className="text-sm text-gray-600 italic">The weather is nice, sunny and mild</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Friend A</div>
            <div>
            <p className="font-medium">Wakha, nmshiw l-l-bahr?</p>
              <p className="text-sm text-gray-600 italic">Okay, shall we go to the beach?</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Friend B</div>
            <div>
            <p className="font-medium">Fikra zina! Walakin khasna nshufu ghadi yshti wlla la</p>
              <p className="text-sm text-gray-600 italic">Good idea! But we need to see if it's going to rain or not</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Friend A</div>
            <div>
            <p className="font-medium">Shftu s-sma, ma fihash sahab</p>
              <p className="text-sm text-gray-600 italic">Look at the sky, there are no clouds</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3 flex-shrink-0">Friend B</div>
            <div>
            <p className="font-medium">Sahih, yallah nmshiw!</p>
              <p className="text-sm text-gray-600 italic">True, let's go!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}