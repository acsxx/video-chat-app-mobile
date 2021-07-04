import "react-native-gesture-handler";
import * as React from "react";
import Route from "./src/Route"
import { AuthProvider } from "./src/contexts/AuthContext";
import { SocketProvider } from "./src/contexts/SocketContext";
const App = () => {
  return (
    <AuthProvider>
      <Route/>
    </AuthProvider>
  )
};

export default App;
