import React from "react";
import MemberCard from "./MemberCard";
import members from "../../lib/members"

const Members = () => {

    return (
        <>
            {/* Dashboard Content */}
            <main className="sm:ml-50 p-4"> {/* Push content right to avoid sidebar overlap */}
                <div className="bg-gray-300 p-6 rounded-lg">
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