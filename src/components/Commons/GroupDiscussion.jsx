import React, { useState, useEffect, useRef } from "react";

// Sample topics for discussion
const topics = [
  "Artificial Intelligence and Ethics",
  "Future of Web3 Technologies",
  "Importance of Cybersecurity",
  "The Role of Cloud Computing in Industry",
  "Impact of Social Media on Society",
];

const GroupDiscussion = () => {
  const [currentTopic, setCurrentTopic] = useState("");
  const [participants, setParticipants] = useState([]);
  const [meetingStarted, setMeetingStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const jitsiContainer = useRef(null);

  // Random topic at 7 PM
  useEffect(() => {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(19, 0, 0); // 7 PM

    if (now > targetTime) targetTime.setDate(targetTime.getDate() + 1);
    const timeUntil7PM = targetTime - now;

    const timer = setTimeout(() => {
      setCurrentTopic(topics[Math.floor(Math.random() * topics.length)]);
      setMeetingStarted(true);
    }, timeUntil7PM);

    return () => clearTimeout(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (meetingStarted) {
      const countdown = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(countdown);
            setMeetingStarted(false);
            alert("Meeting has ended.");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [meetingStarted]);

  // Initialize Jitsi when the meeting starts
  useEffect(() => {
    if (meetingStarted && jitsiContainer.current) {
      const domain = "meet.jit.si";
      const options = {
        roomName: `GroupDiscussion_${currentTopic.replace(/ /g, "_")}`,
        parentNode: jitsiContainer.current,
        userInfo: {
          displayName: `User_${Math.floor(Math.random() * 1000)}`,
        },
        configOverwrite: {
          startWithAudioMuted: false,
          startWithVideoMuted: false,
        },
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);
    }
  }, [meetingStarted, currentTopic]);

  // Handle user joining (simulate participant management)
  const handleJoin = () => {
    if (participants.length < 10) {
      setParticipants((prev) => [...prev, `User${prev.length + 1}`]);
    } else {
      alert("Meeting is full!");
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">Group Discussion</h1>
      {meetingStarted ? (
        <>
          <h2 className="text-xl font-semibold mb-4">Topic: {currentTopic}</h2>
          <h3 className="text-md mb-4">
            Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
          </h3>
          <p className="mb-4">Participants: {participants.join(", ")}</p>
          {participants.length < 10 && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
              onClick={handleJoin}
            >
              Join Discussion
            </button>
          )}
          <div
            ref={jitsiContainer}
            style={{ width: "100%", height: "500px" }}
          />
        </>
      ) : (
        <p className="text-lg">
          Next discussion topic will be available at 7 PM.
        </p>
      )}
    </div>
  );
};

export default GroupDiscussion;
