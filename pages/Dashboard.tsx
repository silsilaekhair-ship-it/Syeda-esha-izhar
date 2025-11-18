import React, { useState, useEffect } from 'react';
import { Shield, Clock, Calendar, Users, FileText, Lock, Bell, CheckCircle, AlertCircle } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    // Set the session start time on mount
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  }, []);

  const appointments = [
    { id: 1, name: 'Fatima Ahmed', time: '10:00 AM', type: 'Student Guidance', status: 'Confirmed' },
    { id: 2, name: 'Zainab Malik', time: '11:30 AM', type: 'Emotional Support', status: 'Confirmed' },
    { id: 3, name: 'Hira Khan', time: '02:00 PM', type: 'Therapy Session', status: 'Pending' },
  ];

  return (
    <div className="animate-fade-in pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Security Banner */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
          
          <div className="flex items-center z-10">
            <div className="relative mr-4">
              <div className="bg-white p-2 rounded-full border border-green-100 shadow-sm">
                <Shield className="text-green-600 w-6 h-6" />
              </div>
              {/* Pulsing Dot on Icon */}
              <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
              </span>
            </div>
            <div>
              <h3 className="text-green-900 font-bold text-lg flex items-center">
                Secure Portal Active
              </h3>
              <p className="text-green-700 text-sm mt-1">End-to-End Encrypted • HIPAA Compliant • Private Session</p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex items-center bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-green-200 shadow-sm">
            <span className="relative flex h-2.5 w-2.5 mr-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-green-800 tracking-wide uppercase">
              Session Live • {currentTime}
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h1 className="font-serif text-3xl text-gray-900">Welcome, Syeda Esha Izhar</h1>
            <p className="text-gray-500 mt-1">Clinical Psychologist Panel</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button className="p-2 bg-white border border-gray-200 rounded-full text-gray-500 hover:text-rose-500 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-rose-500"></span>
            </button>
            <button className="bg-rose-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-rose-600 shadow-md shadow-rose-200 transition-transform transform hover:-translate-y-0.5">
              + New Session Note
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-rose-100 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">Total Clients</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-2">124</h3>
              </div>
              <div className="p-3 bg-rose-50 rounded-xl text-rose-500">
                <Users size={24} />
              </div>
            </div>
            <p className="text-xs text-green-500 mt-4 flex items-center">
              <span className="bg-green-100 rounded-full p-0.5 mr-1"><CheckCircle size={12} /></span> +3 this week
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-100 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">Hours Conducted</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-2">850+</h3>
              </div>
              <div className="p-3 bg-blue-50 rounded-xl text-blue-500">
                <Clock size={24} />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4">Since Jan 2024</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-100 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">Upcoming</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-2">8</h3>
              </div>
              <div className="p-3 bg-purple-50 rounded-xl text-purple-500">
                <Calendar size={24} />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4">Appointments today</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-yellow-100 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">Pending Reports</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-2">2</h3>
              </div>
              <div className="p-3 bg-yellow-50 rounded-xl text-yellow-500">
                <FileText size={24} />
              </div>
            </div>
            <p className="text-xs text-yellow-600 mt-4 font-medium">Action required</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Appointments List */}
          <div className="md:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="font-serif text-xl text-gray-900">Today's Appointments</h2>
              <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <th className="pb-4 pl-2">Client Name</th>
                      <th className="pb-4">Time</th>
                      <th className="pb-4">Session Type</th>
                      <th className="pb-4">Status</th>
                      <th className="pb-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {appointments.map((apt) => (
                      <tr key={apt.id} className="hover:bg-rose-50/30 transition-colors">
                        <td className="py-4 pl-2 font-medium text-gray-900">{apt.name}</td>
                        <td className="py-4 text-gray-600 font-mono text-sm">{apt.time}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            apt.type === 'Student Guidance' 
                              ? 'bg-blue-50 text-blue-600 border-blue-100' 
                              : 'bg-rose-50 text-rose-600 border-rose-100'
                          }`}>
                            {apt.type}
                          </span>
                        </td>
                        <td className="py-4">
                          <span className="flex items-center text-xs font-medium text-gray-600">
                            <span className={`w-2 h-2 rounded-full mr-2 ${apt.status === 'Confirmed' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                            {apt.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <button className="text-sm text-rose-500 hover:text-rose-700 font-medium hover:underline">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Legal & Compliance Panel */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 h-fit">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-2 rounded-lg mr-3">
                <Lock className="text-gray-600 w-5 h-5" />
              </div>
              <h2 className="font-serif text-lg text-gray-900">Legal & Ethical Protocols</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <h4 className="text-blue-800 font-medium text-sm flex items-center mb-2">
                  <AlertCircle size={16} className="mr-2" /> Data Privacy Notice
                </h4>
                <p className="text-xs text-blue-700 leading-relaxed">
                  All client records on this platform are encrypted. Ensure you are in a private environment before opening detailed case files to maintain patient confidentiality as per ethical guidelines.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h4 className="text-gray-800 text-sm font-medium mb-2">Clinical Disclaimer</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Silsila-e-Khair provides emotional support and counseling. For clients presenting immediate risk of harm to self or others, please refer to the Emergency Intervention Protocol (EIP-2024).
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                 <h4 className="text-gray-800 text-sm font-medium mb-2">Professional Liability</h4>
                 <p className="text-xs text-gray-500 leading-relaxed">
                   Ensure consent forms are digitally signed before commencing new therapy cycles.
                 </p>
              </div>
              
              <button className="w-full border border-gray-200 text-gray-600 rounded-xl py-2 text-sm hover:bg-gray-50 transition-colors">
                View Full Legal Guidelines
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};