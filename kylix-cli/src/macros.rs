// Algorithm dispatch macros — eliminate per-variant boilerplate in cmd_* functions.

macro_rules! kem_keygen {
    ($algo:ty) => {{
        let (dk, ek) =
            <$algo>::keygen(&mut rng()).map_err(|e| anyhow!("Key generation failed: {:?}", e))?;
        (
            ek.as_bytes().to_vec(),
            Zeroizing::new(dk.as_bytes().to_vec()),
        )
    }};
}

macro_rules! dsa_keygen {
    ($algo:ty) => {{
        let (sk, pk) =
            <$algo>::keygen(&mut rng()).map_err(|e| anyhow!("Key generation failed: {:?}", e))?;
        (
            pk.as_bytes().to_vec(),
            Zeroizing::new(sk.as_bytes().to_vec()),
        )
    }};
}

macro_rules! kem_encaps {
    ($crate_:ident :: $submod:ident, $algo:ty, $pk_bytes:expr) => {{
        let ek = $crate_::$submod::EncapsulationKey::from_bytes(&$pk_bytes)
            .map_err(|e| anyhow!("Invalid public key: {:?}", e))?;
        let (ct, ss) = <$algo>::encaps(&ek, &mut rng())
            .map_err(|e| anyhow!("Encapsulation failed: {:?}", e))?;
        (ct.as_bytes().to_vec(), ss.as_ref().to_vec())
    }};
}

macro_rules! kem_decaps {
    ($crate_:ident :: $submod:ident, $algo:ty, $sk_bytes:expr, $ct_bytes:expr) => {{
        let dk = $crate_::$submod::DecapsulationKey::from_bytes(&$sk_bytes)
            .map_err(|e| anyhow!("Invalid secret key: {:?}", e))?;
        let ct = $crate_::$submod::Ciphertext::from_bytes(&$ct_bytes)
            .map_err(|e| anyhow!("Invalid ciphertext: {:?}", e))?;
        let ss = <$algo>::decaps(&dk, &ct).map_err(|e| anyhow!("Decapsulation failed: {:?}", e))?;
        ss.as_ref().to_vec()
    }};
}

macro_rules! dsa_sign {
    ($crate_:ident :: $submod:ident, $algo:ty, $sk_bytes:expr, $message:expr) => {{
        let sk = $crate_::$submod::SigningKey::from_bytes(&$sk_bytes)
            .map_err(|e| anyhow!("Invalid signing key: {:?}", e))?;
        let sig = <$algo>::sign(&sk, &$message).map_err(|e| anyhow!("Signing failed: {:?}", e))?;
        sig.as_bytes().to_vec()
    }};
}

macro_rules! dsa_verify {
    ($crate_:ident :: $submod:ident, $algo:ty, $pk_bytes:expr, $sig_bytes:expr, $message:expr) => {{
        let pk = $crate_::$submod::VerificationKey::from_bytes(&$pk_bytes)
            .map_err(|e| anyhow!("Invalid verification key: {:?}", e))?;
        let sig = $crate_::$submod::Signature::from_bytes(&$sig_bytes)
            .map_err(|e| anyhow!("Invalid signature: {:?}", e))?;
        <$algo>::verify(&pk, &$message, &sig)
    }};
}
