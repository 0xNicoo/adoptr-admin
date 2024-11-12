const getMappedCardTittle = (key) => {
    const mappings = {
      publicationsCount: "Publicaciones",
      profilesCount: "Perfiles",
      postCount: "Post",
      adoptionPublicationsCount: "Publicaciones de adopciones",
      adoptedPetsCount: "Mascotas adoptadas",
      servicePublicationsCount: "Publicaciones de servicio",
      lostPublicationsCount: "Publicaciones de perdidas",
      totalPublicationsReported: "Publicaciones reportadas",
      adoptionReported: "Reportes adopción",
      lostReported: "Reportes perdidas",
      serviceReported: "Reportes servicios",
      postReported: "Reportes post",
      profileReported: "Reportes perfil",
      donationCount: "Donaciones"
    };
  
    return mappings[key] || null;
}

export default getMappedCardTittle