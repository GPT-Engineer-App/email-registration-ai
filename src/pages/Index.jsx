import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, HStack, Box, useToast } from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaGlobe } from "react-icons/fa";

const Index = () => {
  const [emails, setEmails] = useState(Array(50).fill(""));
  const [password, setPassword] = useState("defaultPassword");
  const [website, setWebsite] = useState("");
  const toast = useToast();

  const handleEmailChange = (index, value) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleRegister = () => {
    if (!website) {
      toast({
        title: "Error",
        description: "Please enter a website URL.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    emails.forEach((email, index) => {
      if (email) {
        // Simulate registration process
        console.log(`Registering ${email} with password ${password} on ${website}`);
        // Here you would add the actual registration logic
      }
    });

    toast({
      title: "Success",
      description: "Registration process started for all emails.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Bulk Email Registration</Text>
        <HStack width="100%">
          <Box as={FaGlobe} />
          <Input placeholder="Website URL" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </HStack>
        <HStack width="100%">
          <Box as={FaLock} />
          <Input placeholder="Default Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </HStack>
        {emails.map((email, index) => (
          <HStack key={index} width="100%">
            <Box as={FaEnvelope} />
            <Input placeholder={`Email ${index + 1}`} value={email} onChange={(e) => handleEmailChange(index, e.target.value)} />
          </HStack>
        ))}
        <Button colorScheme="teal" onClick={handleRegister}>
          Register All Emails
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
