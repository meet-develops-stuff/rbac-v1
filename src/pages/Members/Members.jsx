import React from "react";
import MemberCard from "./MemberCard";
import useLocalStorage from '../../hooks/useLocalStorage';

const Members = () => {
    const [members] = useLocalStorage('members', []);

    return (
        <>
            {/* Dashboard Content */}
            <main className="sm:ml-50 p-4"> {/* Push content right to avoid sidebar overlap */}
                <div className="bg-gray-300 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-xl flex-1 text-center">Member Details</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
                        {members.map((member) => (
                            <MemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Members;