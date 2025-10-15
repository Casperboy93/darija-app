"use client";

import React from 'react';

export default function BookingReservations() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Booking and Reservations
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-3">Hotel Booking</h3>
          <div className="space-y-2">
            <p className="text-sm"><span className="font-semibold">Bghit nhjez bit:</span> I want to book a room</p>
            <p className="text-sm"><span className="font-semibold">Li kam lila?:</span> For how many nights?</p>
            <p className="text-sm"><span className="font-semibold">Wash 3andkum bit fadi?:</span> Do you have an available room?</p>
            <p className="text-sm"><span className="font-semibold">Bhal shhal f lila?:</span> How much per night?</p>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-3">Transport Booking</h3>
          <div className="space-y-2">
            <p className="text-sm"><span className="font-semibold">Bghit tikit l Fes:</span> I want a ticket to Fes</p>
            <p className="text-sm"><span className="font-semibold">Ash waqt l qitar?:</span> What time is the train?</p>
            <p className="text-sm"><span className="font-semibold">Wash kayn takhfid?:</span> Is there a discount?</p>
            <p className="text-sm"><span className="font-semibold">Fin l mahatta?:</span> Where is the station?</p>
          </div>
        </div>
      </div>
    </div>
  );
}