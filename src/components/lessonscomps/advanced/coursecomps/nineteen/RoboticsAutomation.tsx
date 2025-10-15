"use client";

import React from 'react';

export default function RoboticsAutomation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Robotics and Automation
      </h2>
      
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-green-800 mb-4">Robotics Technology</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Robot Types</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Rubut sinaʿi:</span> Industrial robot</p>
              <p><span className="font-semibold">Rubut khidmi:</span> Service robot</p>
              <p><span className="font-semibold">Rubut tibbi:</span> Medical robot</p>
              <p><span className="font-semibold">Rubut dhaki:</span> Smart robot</p>
              <p><span className="font-semibold">Rubut mutaharrik:</span> Mobile robot</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Automation Systems</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Atamata sinaʿiyya:</span> Industrial automation</p>
              <p><span className="font-semibold">Raqaba aliyya:</span> Automated control</p>
              <p><span className="font-semibold">Nizam dhaki:</span> Smart system</p>
              <p><span className="font-semibold">Hassasat:</span> Sensors</p>
              <p><span className="font-semibold">Muharrikat:</span> Actuators</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Human-Robot Interaction</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Tafaʿul insan-rubut:</span> Human-robot interaction</p>
              <p><span className="font-semibold">Wajha mustakhdim:</span> User interface</p>
              <p><span className="font-semibold">Aman rubuti:</span> Robot safety</p>
              <p><span className="font-semibold">Taʿawun rubuti:</span> Robot collaboration</p>
              <p><span className="font-semibold">Dhakaʾ ijtimaʿi:</span> Social intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}