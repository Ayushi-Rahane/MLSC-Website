import { useState } from "react";
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function Team() {
  const [expandedSubteams, setExpandedSubteams] = useState({});

  const mlscHead = {
    name: "Vaishnavi Ahirre",
    role: "MLSC Head",
  };

  const teams = [
    {
      id: "talent-tech",
      name: "Talent & Tech Team",
      head: "Karishma Chidgopkar",
      color: "from-purple-500 to-purple-600",
      subTeams: [
        {
          id: "web3",
          name: "Web3",
          members: [
            "Dnyaneshwari Khatke",
            "Aditi Shivapurkar",
            "Riya Khare"
          ],
        },
        {
          id: "webdev",
          name: "Web Dev",
          members: [
            "Ayushi Rahane",
            "Srushti Sondawalde",
            "Prisha Parikh"
          ],
        },
        {
          id: "aiml",
          name: "AIML",
          members: [
            "Shriya Jaripatke",
            "Sanjana Kulkarni",
            "Sakshi Kale",
            "Tanmayi Kulkarni",
            "Sahisha Chipade"
          ],
        },
      ],
    },
    {
      id: "skillsphere",
      name: "SkillSphere",
      head: "Head name",
      color: "from-blue-500 to-blue-600",
      subTeams: [
        {
          id: "content",
          name: "Content",
          members: [
            "Varda Kachroo",
            "Prachi Gagnani",
            "Rucha Walvekar"
          ],
        },
        {
          id: "events",
          name: "Events",
          members: [
            "Bhakti Dharmadhikari",
            "Ira Ketkar",
            "Mrunal Deore",
            "Tahjua Chavan"
          ],
        },
        {
          id: "pr",
          name: "PR & Marketing",
          members: [
            "Swarali Rake",
            "Chinmayee Chaple",
            "Mukta Deshpande"
          ],
        },
        {
          id: "creative",
          name: "Creative Design & SM",
          members: [
            "Hindavi Bhosale",
            "Mayoori Kulkarni",
            "Shraddha Bhujbal",
            "Suhani Patil"
          ],
        },
      ],
    },
    {
      id: "codesphere",
      name: "CodeSphere",
      head: "Head name",
      color: "from-green-500 to-green-600",
      members: [
        "Sofia Shahapure",
        "Aishwari Bakshi",
        "Disha Patil",
        "Mitwa Gami"
      ],
    },
    {
      id: "finance",
      name: "Finance",
      head: "Head Name",
      color: "from-orange-500 to-orange-600",
      members: [
        "Arya Dixit",
        "Shubhashree Shinde",
        "Radha Shukla",
        "Veena Shastri"
      ],
    },
  ];

  const toggleSubteam = (subteamId) => {
    setExpandedSubteams(prev => ({ ...prev, [subteamId]: !prev[subteamId] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">Meet The Team</h1>
        <div className="w-20 h-1 bg-blue-500 mb-6"></div>
        <p className="text-white/70 text-lg mb-16">
          Microsoft Learn Student Chapter 2025–26
        </p>

        {/* MLSC Head */}
        <div className="flex justify-center mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-2xl p-8 min-w-[320px] text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-bold mb-2">{mlscHead.name}</div>
            <div className="text-lg opacity-90">{mlscHead.role}</div>
          </div>
        </div>

        {/* Connecting line */}
        <div className="flex justify-center mb-8">
          <div className="w-0.5 h-12 bg-white/20"></div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((team) => (
            <div key={team.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              {/* Team Head */}
              <div className={`bg-gradient-to-r ${team.color} text-white p-6 text-center`}>
                <h3 className="text-xl font-bold mb-2">{team.name}</h3>
                <div className="text-sm opacity-90 bg-white/20 rounded-lg py-2 px-3 inline-block">
                  Lead: {team.head}
                </div>
              </div>

              {/* Subteams or Direct Members */}
              <div className="p-4">
                {team.subTeams ? (
                  <div className="space-y-3">
                    {team.subTeams.map((sub) => (
                      <div key={sub.id}>
                        <button
                          onClick={() => toggleSubteam(sub.id)}
                          className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-3 text-white text-left flex items-center justify-between transition-all"
                        >
                          <span className="font-medium">{sub.name}</span>
                          {expandedSubteams[sub.id] ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>

                        {/* Members appear below the subteam button */}
                        {expandedSubteams[sub.id] && (
                          <div className="mt-2 ml-2 space-y-2">
                            {sub.members.map((member, idx) => (
                              <div
                                key={idx}
                                className="bg-white/5 border border-white/10 rounded-lg p-2 text-white/90 text-sm"
                              >
                                {member}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {team.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 border border-white/20 rounded-lg p-3 text-white text-sm"
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}