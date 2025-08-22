/*  const fetchFriends = async () => {
    try {
      const backendURL = "/user?id=/friends";
      const response = await fetch(backendURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setFriendsList(data);
      } else {
        console.error("Erreur API:", response.status);
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
    }
  }; */
